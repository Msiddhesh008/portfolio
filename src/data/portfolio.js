/**
 * Portfolio content — edit this file to update the entire site.
 */

export const site = {
  title: 'Siddhesh More — Full Stack & Mobile Developer',
  description:
    'Portfolio of Siddhesh More — full stack and React Native developer building web and hybrid mobile apps from Mumbai, India.',
}

export const profile = {
  name: 'Siddhesh More',
  role: 'Full Stack & Mobile Developer',
  tagline: 'Web and hybrid mobile experiences that feel effortless.',
  bio: 'I build web apps and React Native hybrid mobile products at the intersection of design and engineering — with clarity, precision, and purpose.',
  email: 'msiddhesh008@gmail.com',
  location: 'Mumbai, India',
}

export const hero = {
  ctaWork: 'View my work',
  ctaContact: 'Contact me',
  /**
   * Hero name metallic style — change this to preview different looks:
   * 'chrome'     — cool polished silver (default)
   * 'silver'     — brushed aluminum
   * 'gold'       — warm luxury gold
   * 'platinum'   — bright white-silver
   * 'rose-gold'  — soft pink-gold
   * 'obsidian'   — dark gunmetal
   * 'prism'      — WWDC-style chromatic glow
   */
  titleStyle: 'chrome',
}

export const about = {
  headline: ['Building digital products', 'with intention.'],
  stats: [
    { value: '5+', label: 'Years experience' },
    { value: '40+', label: 'Projects delivered' },
    { value: '12', label: 'Happy clients' },
  ],
}

export const skillsSection = {
  headline: 'Expertise.',
  subhead: 'Tools and technologies I work with every day.',
}

export const contact = {
  headline: ["Let's build something", 'remarkable together.'],
  subhead: 'Open to freelance, full-time, and collaboration opportunities.',
}

export const nav = {
  logo: 'Portfolio',
  cta: 'Get in touch',
  ctaHref: '/#contact',
}

export const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export const projectsSection = {
  learnMore: 'Learn more',
}

export const projectDetail = {
  ctaText: 'Interested in working together?',
  ctaLink: 'Get in touch',
}

export const projects = [
  {
    id: 1,
    slug: 'zing-hr',
    title: 'Zing HR',
    subtitle: 'HR Management System for Zing HR',
    description:
      'End-to-end HR platform with web dashboard and React Native mobile app for attendance, payroll, and performance reviews.',
    tags: ['React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    year: '2025',
    image: '/projects/aurora.svg',
    layout: 'wide',
    detail: {
      client: 'Zing HR',
      role: 'Full Stack Developer',
      duration: '8 months',
      overview:
        'Zing HR is an end-to-end human resources platform that helps organizations manage employees, payroll, attendance, and performance reviews from a single dashboard. The product was designed with clarity first — complex HR workflows simplified into intuitive, role-based experiences.',
      challenge:
        'Legacy spreadsheets and disconnected tools made onboarding slow and error-prone. HR teams needed a unified system that could scale across departments without sacrificing compliance or auditability.',
      solution:
        'Built a modular React web app and React Native hybrid mobile companion with a shared Node.js API layer, role-based access control, and real-time notifications. Designed information hierarchy around daily HR tasks so managers and employees could complete actions in fewer steps.',
      features: [
        'Employee directory with org chart and department filters',
        'Attendance tracking with leave requests and approvals',
        'Payroll summaries and downloadable payslip generation',
        'Performance review cycles with manager dashboards',
        'Admin console for policies, roles, and audit logs',
        'React Native mobile app for iOS and Android with push notifications',
      ],
      highlights: [
        { label: 'Active users', value: '12K+' },
        { label: 'Onboarding time', value: '-40%' },
        { label: 'Modules shipped', value: '6' },
        { label: 'Uptime', value: '99.9%' },
      ],
      outcomes: [
        'Reduced average onboarding time from five days to three',
        'Centralized HR data previously spread across four tools',
        'Improved employee self-service adoption by 62% in the first quarter',
      ],
    },
  },
  {
    id: 2,
    slug: 'autolex',
    title: 'Autolex',
    subtitle: 'A platform for lawyers to manage their clients and cases',
    description: 'Case management platform for legal firms — clients, documents, hearings, and billing in one workspace.',
    tags: ['React', 'Python', 'PostgreSQL', 'REST & GraphQL', 'AWS'],
    year: '2025',
    image: '/projects/pulse.svg',
    layout: 'center',
    detail: {
      client: 'Legal Tech Startup',
      role: 'Frontend Lead',
      duration: '6 months',
      overview:
        'Autolex streamlines case management for law firms — client records, document workflows, hearing schedules, and billing in one secure workspace. The interface prioritizes scanability so attorneys can find case context in seconds.',
      challenge:
        'Lawyers juggled email threads, shared drives, and calendar apps. Critical deadlines were missed because case status lived in too many places with no single source of truth.',
      solution:
        'Delivered a case-centric UI with timeline views, document tagging, and automated reminders. Integrated search across clients, matters, and filings with PostgreSQL full-text indexing on the backend.',
      highlights: [
        { label: 'Cases managed', value: '3.2K' },
        { label: 'Firms onboarded', value: '18' },
        { label: 'Doc retrieval', value: '-55%' },
        { label: 'API endpoints', value: '48' },
      ],
      features: [
        'Unified client and matter profiles with activity timelines',
        'Document upload, versioning, and full-text search',
        'Court date calendar with email and in-app reminders',
        'Time tracking and invoice draft generation',
        'Firm-wide analytics on caseload and billable hours',
      ],
      outcomes: [
        'Cut average document retrieval time by more than half',
        'Enabled firms to onboard new associates in under a day',
        'Reduced missed deadline incidents reported by pilot users',
      ],
    },
  },
  {
    id: 3,
    slug: 'regroup',
    title: 'Regroup',
    subtitle: 'Social media platform for athletes and fitness enthusiasts',
    description: 'Hybrid mobile app for athletes and fitness enthusiasts on iOS and Android.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
    year: '2024',
    image: '/projects/lumen.svg',
    layout: 'stack',
    detail: {
      client: 'Fitness Community',
      role: 'Mobile & Product Engineer',
      duration: '5 months',
      overview:
        'Regroup connects athletes and fitness enthusiasts through training logs, group challenges, and community feeds. Built as a React Native hybrid app for iOS and Android with a shared codebase and native-feeling performance.',
      challenge:
        'Existing fitness apps felt either too clinical or too noisy. The team needed one hybrid mobile product that shipped to both app stores without maintaining separate native codebases.',
      solution:
        'Shipped a React Native + Expo hybrid app with image-first post cards, native navigation, push notifications, and challenge leaderboards. Optimized list rendering and image caching for smooth scrolling on mid-range devices.',
      highlights: [
        { label: 'Monthly active', value: '8.5K' },
        { label: 'Posts shared', value: '120K' },
        { label: 'Challenges', value: '240+' },
        { label: 'Lighthouse', value: '94' },
      ],
      features: [
        'Cross-platform React Native app for iOS and Android',
        'Activity feed with photos, PRs, and group shout-outs',
        'Weekly challenges with live leaderboards',
        'Training log with sets, reps, and personal records',
        'Push notifications for challenges and social activity',
        'Deep linking and offline-friendly caching with Expo',
      ],
      outcomes: [
        'Achieved sub-2s first contentful paint on 4G networks',
        'Challenge participation grew 3× after leaderboard redesign',
        'Community retention improved 28% over six weeks',
      ],
    },
  },
  {
    id: 4,
    slug: 'orbit',
    title: 'Orbit',
    subtitle: 'Collaborative workspace for remote teams',
    description: 'Collaborative workspace with live presence, audio huddles, and shared boards for remote teams.',
    tags: ['React', 'Node.js', 'WebRTC'],
    year: '2024',
    image: '/projects/orbit.svg',
    layout: 'device',
    detail: {
      client: 'Remote-First SaaS',
      role: 'Full Stack Developer',
      duration: '7 months',
      overview:
        'Orbit is a collaborative workspace where distributed teams share docs, huddle in rooms, and see who is online — without the clutter of traditional enterprise tools. Presence and context are always visible.',
      challenge:
        'Remote teams lost the ambient awareness of an office. Chat tools alone did not convey availability, focus time, or what teammates were working on.',
      solution:
        'Built spatial rooms with WebRTC audio huddles, live presence indicators, and shared boards. Designed a calm UI that surfaces status without constant notifications.',
      highlights: [
        { label: 'Teams', value: '45' },
        { label: 'Daily huddles', value: '1.8K' },
        { label: 'Latency', value: '<80ms' },
        { label: 'Rooms', value: 'Unlimited' },
      ],
      features: [
        'Live presence with focus, available, and away states',
        'One-click audio huddles powered by WebRTC',
        'Shared boards with real-time cursor presence',
        'Threaded discussions tied to rooms and projects',
        'Integrations for calendar and task handoffs',
      ],
      outcomes: [
        'Teams reported 35% fewer status-update meetings',
        'Average huddle setup dropped from minutes to one click',
        'Pilot cohort NPS reached 52 within the first release cycle',
      ],
    },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

export const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS / Sass'] },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo', 'Hybrid Apps', 'iOS & Android', 'Push Notifications'],
  },
  { category: 'Design', items: ['Figma', 'Prototyping', 'Design Systems'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST & GraphQL', 'AWS'] },
  { category: 'Tools', items: ['Git', 'Vite', 'Docker', 'CI/CD'] },
]

/** Update href values with your real profile URLs. */
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', icon: 'linkedin' },
]
