import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Code2, 
  Smartphone, 
  Cpu, 
  Zap,
  Globe
} from 'lucide-react';
import { Project, SocialLink, CareerStep } from './types';

export const PERSONAL_INFO = {
  name: "Joseph Christopherson",
  headline: "Director ar Overwrite",
  bio: "Experienced Product Manager helping founders reach product-market fit from discovery to delivery",
  avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHOe8RGhVI0VQ/profile-displayphoto-shrink_800_800/B4EZSLPiKSGcAc-/0/1737502893940?e=1770249600&v=beta&t=DPzuyhpMvBagkZaB1XyT2i1eB2NbswzJNSwHcj1ifPs", // Placeholder
};

export const CAREER: CareerStep[] = [
  { role: "Product Manager", company: "Kraken", current: true, logoColor: "bg-blue-500" },
  { role: "Growth Product Manager", company: "Blockchain.com", current: false, logoColor: "bg-stone-800" },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Slash Command UI',
    description: 'A React component library for Notion-style slash commands implemented with Headless UI.',
    category: 'Open Source',
    link: '#',
    icon: Code2
  },
  {
    id: '2',
    title: 'AI Interview Prep',
    description: 'Generative AI platform helping candidates practice behavioral interviews with real-time feedback.',
    category: 'SaaS',
    link: '#',
    icon: Cpu
  },
  {
    id: '3',
    title: 'Mobile Wallet Kit',
    description: 'React Native boilerplate for crypto-wallets with built-in biometrics and security features.',
    category: 'Mobile',
    link: '#',
    icon: Smartphone
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/joseph-christopherson/', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/Jos-ph', icon: Github },
];

export const STACK = [
  { name: 'Claude', icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.png" alt="Claude" /> },
  { name: 'Cursor', icon: <img src="https://cdn.flyonui.com/fy-assets/landing-page/logos/cursor.png" alt="Cursor" /> },
];