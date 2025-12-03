import { Home, User, Code, Mail, Github, Linkedin, Twitter, Layers } from 'lucide-react';
import { ProjectItem } from './types';

export const SCROLL_THRESHOLD = 20;

export const PROFILE = {
  name: 'Alex Rivera',
  title: 'Creative Technologist',
  bio: 'Crafting digital experiences at the intersection of design and engineering. Specializing in high-performance React applications and interactive UI.',
  email: 'alex.rivera@example.com',
  location: 'San Francisco, CA'
};

export const NAV_ITEMS = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Layers },
  { label: 'Projects', href: '#projects', icon: Code },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const SOCIALS = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
];

export const EXPERIENCE = [
  {
    id: 1,
    period: '2023 - Present',
    role: 'Senior Frontend Engineer',
    company: 'Nebula Stream',
    description: 'Architecting the next-generation video streaming platform. Improved core web vitals by 45% and reduced bundle size by 30%.',
    technologies: ['React', 'Next.js', 'WebGL', 'Rust']
  },
  {
    id: 2,
    period: '2021 - 2023',
    role: 'UI/UX Developer',
    company: 'Pixel Perfect Studios',
    description: 'Developed award-winning marketing sites and interactive campaigns for Fortune 500 clients.',
    technologies: ['Vue.js', 'Three.js', 'GSAP', 'WebGL']
  },
  {
    id: 3,
    period: '2019 - 2021',
    role: 'Full Stack Developer',
    company: 'Innovate local',
    description: 'Built scalable e-commerce solutions and internal tools using MERN stack.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  }
];

export const SKILLS = [
  { name: 'React/Next.js', level: 98, category: 'Frontend' },
  { name: 'TypeScript', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Three.js/WebGL', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Docker/K8s', level: 70, category: 'DevOps' },
  { name: 'AWS/GCP', level: 75, category: 'DevOps' },
  { name: 'Figma', level: 90, category: 'Design' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'neon-tictactoe',
    title: 'Neon Tic-Tac-Toe',
    description: 'A futuristic, glowing implementation of the classic game featuring unbeatable AI logic, sound effects, and glassmorphism UI.',
    tags: ['Game Dev', 'AI Algorithm', 'Glassmorphism'],
    repoUrl: 'https://github.com',
    componentName: 'TicTacToe'
  },
  {
    id: 'chronos-stopwatch',
    title: 'Chronos Pro',
    description: 'High-precision professional timing tool with split times, local persistence, and high-performance requestAnimationFrame loop.',
    tags: ['React Hooks', 'Performance', 'Storage'],
    repoUrl: 'https://github.com',
    componentName: 'Stopwatch'
  },
  {
    id: 'skycast-weather',
    title: 'SkyCast',
    description: 'Immersive weather dashboard featuring dynamic ambient backgrounds that adapt to live weather conditions and geolocation services.',
    tags: ['OpenMeteo API', 'Geolocation', 'Dynamic UI'],
    repoUrl: 'https://github.com',
    componentName: 'WeatherApp'
  }
];

export const DEFAULT_LOCATION = {
  latitude: 40.7128,
  longitude: -74.0060,
  label: 'New York, USA'
};

export const API_CONFIG = {
  WEATHER_BASE_URL: 'https://api.open-meteo.com/v1/forecast',
  GEO_BASE_URL: 'https://geocoding-api.open-meteo.com/v1/search',
};

export const WEATHER_PARAMS = 'current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto';