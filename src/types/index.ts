// 项目类型定义
export interface Project {
  title: string;
  status: string;
  description: string;
  techStack: string[];
  features?: string[];
  result?: string;
  highlights?: string[];
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  price: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface AboutData {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

// 动画相关类型
export interface MatrixDecodeProps {
  isActive: boolean;
  onComplete: () => void;
  clickCount: number;
}

export interface LoadingAnimationProps {
  isVisible: boolean;
}

export interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

// Voxel Dog 相关类型
export interface VoxelDogProps {
  className?: string;
}

export interface VoxelDogLoaderProps {
  className?: string;
}
