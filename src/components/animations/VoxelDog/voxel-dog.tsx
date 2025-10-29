import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { loadGLTFModel } from '../../../lib/model';
import { DogSkeleton, DogContainer } from './voxel-dog-loader';

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog: React.FC = memo(() => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
  const refCamera = useRef<THREE.OrthographicCamera | null>(null);
  const urlDogGLB = '/dog.glb';

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (refContainer.current) {
      observer.observe(refContainer.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);

      // Update camera scaling on resize
      const { current: camera } = refCamera;
      if (camera) {
        const isMobile = scW < 768;
        const isTablet = scW >= 768 && scW < 1024;
        const aspectRatio = scW / scH;

        const baseSize = Math.min(scW, scH);
        let scale;

        if (isMobile) {
          scale = baseSize * 0.006 + 3.2;
        } else if (isTablet) {
          scale = baseSize * 0.005 + 3.8;
        } else {
          scale = baseSize * 0.004 + 4.2;
        }

        scale = Math.max(3.0, Math.min(scale, 8.0));

        const scaleX = scale * Math.min(1, aspectRatio);
        const scaleY = scale * Math.min(1, 1 / aspectRatio);

        camera.left = -scaleX;
        camera.right = scaleX;
        camera.top = scaleY;
        camera.bottom = -scaleY;
        camera.updateProjectionMatrix();
      }
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (!container || !isInView) {
      return;
    }

    const scW = container.clientWidth;
    const scH = container.clientHeight;

    // 检测移动端
    const isMobile = scW < 768;

    // 移动端像素比策略：平衡清晰度和性能
    // 使用 1.5-1.75 之间的值，而不是固定的 1
    const basePixelRatio = isMobile 
      ? Math.min(window.devicePixelRatio, 1.75) // 移动端限制在 1.75，保持清晰度
      : Math.min(window.devicePixelRatio, 2);   // 桌面端限制在 2
    
    const renderer = new THREE.WebGLRenderer({
      // 像素比 <= 1.5 时启用抗锯齿，不会太影响性能
      antialias: basePixelRatio <= 1.5,
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance',
      preserveDrawingBuffer: false,
    });
    renderer.setPixelRatio(basePixelRatio);
    renderer.setSize(scW, scH);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = false; // 禁用阴影以提升性能
    // 移动端优化：禁用对象排序以提高性能
    if (isMobile) {
      renderer.sortObjects = false;
    }
    container.appendChild(renderer.domElement);
    refRenderer.current = renderer;
    const scene = new THREE.Scene();

    const target = new THREE.Vector3(-0.5, 1.2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );

    // Improved responsive scaling with aspect ratio consideration
    const isTablet = scW >= 768 && scW < 1024;
    const aspectRatio = scW / scH;

    // Base scale calculation that considers both dimensions
    const baseSize = Math.min(scW, scH);
    let scale;

    if (isMobile) {
      scale = baseSize * 0.006 + 3.2;
    } else if (isTablet) {
      scale = baseSize * 0.005 + 3.8;
    } else {
      scale = baseSize * 0.004 + 4.2;
    }

    // Clamp scale to prevent extreme stretching
    scale = Math.max(3.0, Math.min(scale, 8.0));

    // Adjust for aspect ratio to prevent stretching
    const scaleX = scale * Math.min(1, aspectRatio);
    const scaleY = scale * Math.min(1, 1 / aspectRatio);

    const camera = new THREE.OrthographicCamera(
      -scaleX,
      scaleX,
      scaleY,
      -scaleY,
      0.01,
      50000
    );
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);
    refCamera.current = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // 添加柔和的方向光，减少阴影对比度
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 4, 2);
    directionalLight.castShadow = false;
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    // 移动端降低自动旋转速度，桌面端保持流畅
    controls.autoRotateSpeed = isMobile ? 0.5 : 1.0;
    controls.enableDamping = true;
    controls.dampingFactor = isMobile ? 0.08 : 0.05; // 移动端增加阻尼以减少计算
    controls.target = target;
    controls.enableZoom = false;
    controls.enablePan = false;
    // 移动端禁用交互以减少性能开销
    if (isMobile) {
      controls.enabled = false;
    }

    // Loading 3D model

    loadGLTFModel(scene, urlDogGLB, {
      receiveShadow: false,
      castShadow: false,
    })
      .then(() => {
        // Model loaded successfully
        animate();
        setLoading(false);
      })
      .catch(_error => {
        // Error loading model - fallback to no model display
        setLoading(false);
      });

    let req: number | null = null;
    let frame = 0;
    let lastTime = 0;
    // 移动端降低帧率到30fps，桌面端保持60fps
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    // 性能检测：记录帧率
    let fpsHistory: number[] = [];
    let lastFpsCheck = 0;
    const fpsCheckInterval = 1000; // 每秒检查一次
    let qualityLevel = 1; // 2 = high, 1 = normal, 0 = low
    let currentPixelRatio = basePixelRatio; // 当前实际像素比
    
    // 页面可见性检测：移动端在后台时暂停动画
    let isPageVisible = true;
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = (currentTime: number = 0) => {
      req = requestAnimationFrame(animate);

      // 移动端：页面不可见时跳过渲染
      if (isMobile && !isPageVisible) {
        return;
      }

      // 帧率限制
      if (currentTime - lastTime < frameInterval) {
        return;
      }
      lastTime = currentTime;

      // 性能检测：每1秒检查一次帧率
      if (currentTime - lastFpsCheck > fpsCheckInterval) {
        const actualFPS = fpsHistory.length;
        fpsHistory = [];
        lastFpsCheck = currentTime;
        
        // 动态调整像素比，保持清晰度的同时优化性能
        if (actualFPS < targetFPS * 0.7 && qualityLevel > 0) {
          // 性能不足：逐步降低像素比
          qualityLevel = 0;
          const newPixelRatio = Math.max(1.0, currentPixelRatio - 0.25); // 降低0.25，但不低于1.0
          if (newPixelRatio !== currentPixelRatio) {
            currentPixelRatio = newPixelRatio;
            renderer.setPixelRatio(currentPixelRatio);
          }
        } else if (actualFPS >= targetFPS * 0.95 && qualityLevel < 2) {
          // 性能良好：尝试提升像素比
          qualityLevel = 2;
          const newPixelRatio = Math.min(basePixelRatio, currentPixelRatio + 0.25); // 提升0.25，但不高于初始值
          if (newPixelRatio !== currentPixelRatio && newPixelRatio <= basePixelRatio) {
            currentPixelRatio = newPixelRatio;
            renderer.setPixelRatio(currentPixelRatio);
          }
        } else if (actualFPS >= targetFPS * 0.8 && qualityLevel < 1) {
          // 性能恢复：回到正常水平
          qualityLevel = 1;
          const newPixelRatio = Math.min(basePixelRatio, basePixelRatio * 0.9); // 恢复到初始值的90%
          if (newPixelRatio !== currentPixelRatio) {
            currentPixelRatio = newPixelRatio;
            renderer.setPixelRatio(currentPixelRatio);
          }
        }
      } else {
        fpsHistory.push(1);
      }

      // 移动端缩短相机动画时间，立即进入自动旋转
      const maxFrame = isMobile ? 50 : 100;
      frame = frame <= maxFrame ? frame + 1 : frame;

      if (frame <= maxFrame) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / (maxFrame + 20)) * Math.PI * 20;

        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        if (controls.enabled) {
          controls.update();
        } else {
          // 移动端禁用controls时，手动更新旋转（更轻量级）
          const rotationSpeed = isMobile ? 0.003 : 0.01;
          const angle = rotationSpeed;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          const dx = camera.position.x - target.x;
          const dz = camera.position.z - target.z;
          camera.position.x = target.x + dx * cos - dz * sin;
          camera.position.z = target.z + dx * sin + dz * cos;
          camera.lookAt(target);
        }
      }

      renderer.render(scene, camera);
    };

    return () => {
      if (req !== null) {
        cancelAnimationFrame(req);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, [isInView]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <DogContainer ref={refContainer}>
      {loading && isInView && <DogSkeleton />}
    </DogContainer>
  );
});

export default VoxelDog;
