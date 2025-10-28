# 📁 项目结构说明

## 🏗️ 目录组织

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx          # 主页面
├── components/            # UI 组件
│   ├── layout/           # 布局组件
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ScrollProgress.tsx
│   ├── sections/         # 页面区块组件
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExpertiseSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ServicesSection.tsx
│   ├── animations/       # 动画组件
│   │   ├── EasterEggModal.tsx
│   │   ├── LoadingAnimation.tsx
│   │   ├── MatrixDecode.tsx
│   │   ├── Preloader.tsx
│   │   └── VoxelDog/     # Voxel Dog 3D 组件
│   │       ├── voxel-dog-loader.tsx
│   │       └── voxel-dog.tsx
│   └── ui/              # 通用UI组件（预留）
├── hooks/               # 自定义 React Hooks
│   └── index.ts
├── lib/                 # 工具库和配置
│   ├── data.ts          # 数据配置
│   └── model.ts         # 3D模型加载器
├── types/               # TypeScript 类型定义
│   └── index.ts
├── utils/               # 工具函数
│   └── index.ts
└── assets/              # 静态资源（开发时使用）
    └── (empty)          # 静态资源已移至 public/ 目录
```

## 🎯 设计原则

### **1. 功能分类**
- **layout/**: 布局相关组件（导航、页脚、滚动进度）
- **sections/**: 页面区块组件（各个主要部分）
- **animations/**: 动画和交互组件
- **ui/**: 通用UI组件（预留扩展）

### **2. 代码组织**
- **hooks/**: 自定义React Hooks，可复用逻辑
- **lib/**: 工具库和配置文件
- **types/**: TypeScript类型定义
- **utils/**: 纯函数工具
- **public/**: 静态资源文件（Next.js要求）

### **3. 函数式编程**
- 所有组件都是函数式组件
- 使用React Hooks进行状态管理
- 纯函数和不可变数据
- 组件间通过props传递数据

## 🚀 技术栈

- **Next.js 16**: React框架
- **TypeScript**: 类型安全
- **Tailwind CSS**: 样式框架
- **Framer Motion**: 动画库
- **Three.js**: 3D图形库
- **Lucide React**: 图标库

## 📦 主要功能

### **页面组件**
- Hero Section: 首页横幅
- About Section: 个人介绍（含Matrix彩蛋）
- Expertise Section: 技能展示
- Projects Section: 项目展示（含Easter Egg）
- Services Section: 服务介绍
- Contact Section: 联系表单

### **动画组件**
- Matrix Decode: Matrix风格解码动画
- Easter Egg Modal: 项目点击彩蛋
- Loading Animation: 加载动画
- Preloader: 页面预加载器
- Voxel Dog: 3D像素狗

### **工具函数**
- WhatsApp链接生成
- 表单验证
- 滚动控制
- 防抖/节流
- 本地存储管理

## 🔧 开发指南

### **添加新组件**
1. 确定组件类型（layout/sections/animations/ui）
2. 在对应目录创建文件
3. 更新类型定义（如需要）
4. 更新导入路径

### **添加新功能**
1. 在 `utils/` 添加工具函数
2. 在 `hooks/` 添加自定义Hook
3. 在 `types/` 添加类型定义
4. 在 `lib/data.ts` 添加数据配置
5. 静态资源放在 `public/` 目录

### **代码规范**
- 使用函数式组件
- 使用TypeScript类型
- 遵循命名约定
- 保持组件单一职责
- 使用Tailwind CSS类名

## 🎨 特色功能

### **Matrix 彩蛋**
- 点击头像触发Matrix解码动画
- 多层级交互体验
- 最终引导到联系表单

### **Easter Egg**
- 项目卡片点击彩蛋
- 幽默的模态框提示
- 引导查看工作流程

### **3D Voxel Dog**
- Three.js渲染的3D模型
- 响应式交互
- 性能优化

## 📱 响应式设计

- 移动优先设计
- 断点适配
- 触摸友好交互
- 性能优化

## 🔒 安全考虑

- 表单验证
- XSS防护
- CSRF保护
- 内容安全策略

---

**维护者**: Tony Mumu  
**最后更新**: 2025年1月
