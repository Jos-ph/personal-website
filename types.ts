import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  username?: string;
}

export interface CareerStep {
  role: string;
  company: string;
  current: boolean;
  logoColor: string; // Tailwind class for generic logo placeholder
}