import { FaAws } from 'react-icons/fa'
import {
  SiCss,
  SiDocker,
  SiExpo,
  SiFigma,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import ReactNativeIcon from '../components/icons/ReactNativeIcon'

/**
 * Perimeter-only positions — logos stay in edge bands, never over center text.
 * Top/bottom bands + left/right side strips.
 */
export const heroTechLogos = [
  { id: 'react', label: 'React', Icon: SiReact, top: '8%', left: '3%', size: 36, rotate: -14, gradient: 0, delay: 0 },
  { id: 'typescript', label: 'TypeScript', Icon: SiTypescript, top: '8%', right: '3%', size: 34, rotate: 12, gradient: 1, delay: 1 },
  { id: 'nextjs', label: 'Next.js', Icon: SiNextdotjs, top: '12%', left: '12%', size: 30, rotate: 8, gradient: 2, delay: 2 },
  { id: 'git', label: 'Git', Icon: SiGit, top: '12%', right: '12%', size: 28, rotate: -10, gradient: 3, delay: 3 },
  { id: 'reactnative', label: 'React Native', Icon: ReactNativeIcon, custom: true, top: '34%', left: '3%', size: 32, rotate: -8, gradient: 4, delay: 4 },
  { id: 'postgresql', label: 'PostgreSQL', Icon: SiPostgresql, top: '52%', left: '3%', size: 30, rotate: 10, gradient: 5, delay: 5 },
  { id: 'expo', label: 'Expo', Icon: SiExpo, top: '34%', right: '3%', size: 30, rotate: 14, gradient: 0, delay: 6 },
  { id: 'node', label: 'Node.js', Icon: SiNodedotjs, top: '52%', right: '3%', size: 34, rotate: -12, gradient: 1, delay: 7 },
  { id: 'docker', label: 'Docker', Icon: SiDocker, bottom: '14%', left: '3%', size: 30, rotate: 11, gradient: 2, delay: 8 },
  { id: 'figma', label: 'Figma', Icon: SiFigma, bottom: '6%', left: '3%', size: 28, rotate: -16, gradient: 3, delay: 9 },
  { id: 'aws', label: 'AWS', Icon: FaAws, bottom: '14%', right: '3%', size: 32, rotate: -11, gradient: 4, delay: 10 },
  { id: 'vite', label: 'Vite', Icon: SiVite, bottom: '6%', right: '3%', size: 32, rotate: 15, gradient: 5, delay: 11 },
  { id: 'css', label: 'CSS', Icon: SiCss, bottom: '4%', left: '50%', size: 26, rotate: 6, gradient: 0, delay: 12, centerX: true },
]

export const heroGradients = [
  ['#2997ff', '#30d158'],
  ['#0077ed', '#5ac8fa'],
  ['#30d158', '#64d2ff'],
  ['#5e5ce6', '#bf5af2'],
  ['#64d2ff', '#2997ff'],
  ['#bf5af2', '#30d158'],
]
