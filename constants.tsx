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
import { Project, SocialLink, CareerStep, ContentItem } from './types';

export const PERSONAL_INFO = {
  name: "Joseph Christopherson",
  headline: "I build high-performance web applications.",
  bio: "Experienced Product Manager helping founders reach product-market fit from discovery to delivery",
  avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHOe8RGhVI0VQ/profile-displayphoto-shrink_800_800/B4EZSLPiKSGcAc-/0/1737502893940?e=1770249600&v=beta&t=DPzuyhpMvBagkZaB1XyT2i1eB2NbswzJNSwHcj1ifPs",
};

export const CAREER: CareerStep[] = [
  { role: "Director", company: "Overwrite", current: true, logoColor: "bg-blue-500" },
  { role: "Product Manager", company: "Kraken", current: false, logoColor: "bg-stone-800", logoUrl: "https://cdn.brandfetch.io/idYQrXoH-Q/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668070444128", bgColor: "#5848D5" },
  { role: "Product Manager", company: "Blockchain.com", current: false, logoColor: "bg-stone-800", logoUrl: "https://cdn.brandfetch.io/idEskmZ0_L/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668081916288", bgColor: "#FFFFFF" },
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
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/joseph-christopherson/', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/Jos-ph', icon: Github },
  { platform: 'Email', url: 'mailto:joseph@example.com', icon: Mail },
];

export const STACK = [
  { name: 'Claude', logoUrl: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claude.png', bgColor: '#DE7356' },
  { name: 'Cursor', logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png', bgColor: '#000000' },
  { name: 'Ghostty', logoUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/ghostty.svg', bgColor: '#0f0f11' },
];

export const CONTENT: ContentItem[] = [
  { id: '1', name: 'Walmart: History & Strategy - Acquired', category: 'Business', tags: ['Podcast'], rating: 5, url: '#' },
  { id: '2', name: 'Claude Code Engineers - AI&I', category: 'Education', tags: ['Podcast'], rating: 5, url: '#' },
  { id: '3', name: 'Andrew Huberman on IFS', category: 'Education', tags: ['Youtube'], rating: 5, url: '#' },
  { id: '4', name: 'Tobi Lütke (Shopify) on ACQ2', category: 'Business', tags: ['Podcast'], rating: 5, url: '#' },
  { id: '5', name: 'Continuous Discovery Habits', category: 'Product', tags: ['Book'], rating: 5, url: '#' },
  { id: '6', name: 'Reid Hoffman on Blitzscaling', category: 'Business', tags: ['Podcast', 'Book'], rating: 5, url: '#' },
  { id: '7', name: 'Sam Altman on Lex Fridman', category: 'Education', tags: ['Podcast', 'Youtube'], rating: 5, url: '#' },
  { id: '8', name: 'The Mom Test', category: 'Product', tags: ['Book'], rating: 5, url: '#' },
  { id: '9', name: 'How to Start a Startup (YC)', category: 'Business', tags: ['Youtube'], rating: 5, url: '#' },
  { id: '10', name: 'Inspired by Marty Cagan', category: 'Product', tags: ['Book'], rating: 5, url: '#' },
];