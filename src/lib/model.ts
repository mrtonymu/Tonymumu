import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;

        // Traverse all children and set shadow properties
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.receiveShadow = receiveShadow;
            child.castShadow = castShadow;
            
            // 优化材质属性，减少过暗效果
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => {
                  if (material.color) {
                    material.color.multiplyScalar(1.1); // 稍微提亮颜色
                  }
                  if (material.roughness !== undefined) {
                    material.roughness = Math.max(0.3, material.roughness); // 确保不会太粗糙
                  }
                });
              } else {
                if (child.material.color) {
                  child.material.color.multiplyScalar(1.1); // 稍微提亮颜色
                }
                if (child.material.roughness !== undefined) {
                  child.material.roughness = Math.max(0.3, child.material.roughness);
                }
              }
            }
          }
        });

        scene.add(obj);

        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
