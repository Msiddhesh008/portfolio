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
    { value: '7+', label: 'Years experience' },
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
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Workflow', href: '/workflow' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
]

export const projectsSection = {
  learnMore: 'Learn more',
}

export const projectDetail = {
  ctaText: 'Interested in working together?',
  ctaLink: 'Get in touch',
}

/** Home experience section — fill in experience[] below. */
export const experienceSection = {
  headline: 'Experience.',
  subhead: 'Where I have built and shipped products.',
  emptyMessage: 'Experience details coming soon.',
}

export const experience = [
  {
    company: 'Zing HR',
    role: 'Full Stack Developer',
    period: '2024 — Present',
    location: 'Mumbai, India',
    summary:
      'Leading development of an end-to-end HR platform with React web dashboard and React Native mobile apps.',
    highlights: [
      'Architected shared Node.js API serving web and mobile clients',
      'Delivered attendance, payroll, and performance review modules',
      'Improved employee self-service adoption across pilot organizations',
    ],
    stack: ['React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    projects: [
      {
        title: 'Zing HR Platform',
        description:
          'Unified HRMS with admin dashboard, employee self-service, and hybrid mobile app for iOS and Android.',
      },
    ],
  },
  {
    company: 'LexFlow Technologies',
    role: 'Frontend Lead',
    period: '2022 — 2024',
    location: 'Mumbai, India',
    summary:
      'Led frontend for a legal-tech SaaS startup building case management tools for law firms.',
    highlights: [
      'Owned React SPA architecture, design system, and document workflow UI',
      'Built full-text search and calendar integrations for court deadlines',
      'Mentored two junior developers and established code review practices',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'GraphQL', 'AWS'],
    projects: [
      {
        title: 'Autolex',
        description:
          'Case management platform — client records, document versioning, hearings, and billing in one workspace.',
      },
    ],
  },
  {
    company: 'DigitalCraft Solutions',
    role: 'React Native Developer',
    period: '2019 — 2022',
    location: 'Mumbai, India',
    summary:
      'Built cross-platform mobile apps and supporting Node.js APIs for startup and agency clients.',
    highlights: [
      'Shipped React Native apps to both app stores with Expo and native modules',
      'Integrated push notifications, deep linking, and offline-first caching',
      'Collaborated with design on pixel-accurate UI across iOS and Android',
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Firebase'],
    projects: [
      {
        title: 'Regroup',
        description:
          'Social fitness app — activity feeds, challenges, leaderboards, and training logs for athletes.',
      },
      {
        title: 'Orbit',
        description:
          'Remote collaboration tool with live presence, audio huddles, and shared boards for distributed teams.',
      },
    ],
  },
]

/** Workflow page — edit steps[] per tech. */
export const workflowSection = {
  headline: 'How I work.',
  subhead: 'End-to-end pipelines and best practices across the stack.',
}

export const workflows = [
  {
    slug: 'react-native',
    title: 'React Native',
    theme: 'rn',
    intro: 'From project bootstrap to App Store — a repeatable hybrid mobile pipeline.',
    steps: [
      {
        title: 'Project setup',
        description: 'Choose Expo or bare workflow, scaffold folders, configure env and EAS.',
        substeps: [],
      },
      {
        title: 'Component architecture',
        description: 'Atomic design — screens, containers, shared UI, and hooks separated cleanly.',
        substeps: [],
      },
      {
        title: 'State and navigation',
        description: 'Predictable state with React Navigation stacks, tabs, and deep links.',
        substeps: [
          { title: 'Screen structure', description: 'Feature-based routes with typed params.' },
          { title: 'Shared components', description: 'Reusable UI primitives with theme tokens.' },
          { title: 'Global state', description: 'Context or Zustand for cross-screen data.' },
        ],
      },
      {
        title: 'Native APIs and modules',
        description: 'Permissions, camera, location, push — bridge only when JS is not enough.',
        substeps: [],
      },
      {
        title: 'Testing and debugging',
        description: 'Jest unit tests, Detox or Maestro E2E, Flipper and Reactotron in dev.',
        substeps: [],
      },
      {
        title: 'Build and store release',
        description: 'EAS builds, OTA updates, store metadata, and staged rollouts.',
        substeps: [],
      },
    ],
  },
  {
    slug: 'nextjs',
    title: 'Next.js',
    theme: 'next',
    intro: 'App Router-first web delivery — server components, caching, and production deploy.',
    steps: [
      {
        title: 'App Router structure',
        description: 'Route groups, layouts, loading and error boundaries per segment.',
        substeps: [],
      },
      {
        title: 'Data fetching strategy',
        description: 'Pick the right render mode per page — never one-size-fits-all.',
        substeps: [
          { title: 'SSR', description: 'Dynamic pages with fresh data on every request.' },
          { title: 'SSG', description: 'Static generation for marketing and docs.' },
          { title: 'ISR', description: 'Revalidate on interval for semi-dynamic content.' },
        ],
      },
      {
        title: 'Server layer',
        description: 'Route handlers, server actions, and typed API contracts with the client.',
        substeps: [],
      },
      {
        title: 'Auth and middleware',
        description: 'Session checks at the edge, protected routes, and role-based access.',
        substeps: [],
      },
      {
        title: 'Performance and SEO',
        description: 'Image optimization, metadata API, Core Web Vitals, and sitemap generation.',
        substeps: [],
      },
      {
        title: 'Deploy and monitor',
        description: 'Vercel preview deploys, env secrets, and runtime error tracking.',
        substeps: [],
      },
    ],
  },
  {
    slug: 'nodejs',
    title: 'Node.js',
    theme: 'node',
    intro: 'APIs that scale — layered backend design from route to database.',
    steps: [
      {
        title: 'API design',
        description: 'REST or GraphQL contracts first — versioning, pagination, and error shapes.',
        substeps: [],
      },
      {
        title: 'Layered architecture',
        description: 'Thin routes, business logic in services, data access in repositories.',
        substeps: [
          { title: 'Routes', description: 'Validate input, map HTTP to service calls.' },
          { title: 'Services', description: 'Business rules, orchestration, transactions.' },
          { title: 'Repositories', description: 'Database queries isolated from domain logic.' },
        ],
      },
      {
        title: 'Database and migrations',
        description: 'PostgreSQL schemas, migrations, indexes, and connection pooling.',
        substeps: [],
      },
      {
        title: 'Auth and validation',
        description: 'JWT or session auth, Zod schemas, rate limiting on sensitive endpoints.',
        substeps: [],
      },
      {
        title: 'Logging and errors',
        description: 'Structured logs, centralized error handling, and health check endpoints.',
        substeps: [],
      },
      {
        title: 'Docker and CI/CD',
        description: 'Containerized deploys, GitHub Actions pipelines, and zero-downtime releases.',
        substeps: [],
      },
    ],
  },
  {
    slug: 'react',
    title: 'React JS',
    theme: 'react',
    intro: 'Component-driven UIs — from scaffold to production with predictable patterns.',
    steps: [
      {
        title: 'Project scaffold',
        description: 'Vite or CRA, TypeScript, ESLint, and folder structure by feature.',
        substeps: [],
      },
      {
        title: 'Component design',
        description: 'Presentational vs container components, composition over inheritance.',
        substeps: [],
      },
      {
        title: 'State management',
        description: 'Local state first, then Context, Zustand, or Redux when complexity grows.',
        substeps: [
          { title: 'Server state', description: 'React Query or SWR for API cache and sync.' },
          { title: 'UI state', description: 'useState and useReducer for form and view state.' },
          { title: 'Global state', description: 'Shared stores only for truly cross-cutting data.' },
        ],
      },
      {
        title: 'Routing and code splitting',
        description: 'React Router lazy routes, suspense boundaries, and protected pages.',
        substeps: [],
      },
      {
        title: 'Testing',
        description: 'React Testing Library for units, MSW for API mocks, Playwright for E2E.',
        substeps: [],
      },
      {
        title: 'Build and deploy',
        description: 'Tree-shaking, env configs, and static or CDN deploy pipelines.',
        substeps: [],
      },
    ],
  },
  {
    slug: 'angular',
    title: 'Angular',
    theme: 'angular',
    intro: 'Enterprise-grade SPAs — modules, dependency injection, and typed templates.',
    steps: [
      {
        title: 'Workspace setup',
        description: 'Angular CLI, strict mode, path aliases, and environment files.',
        substeps: [],
      },
      {
        title: 'Module architecture',
        description: 'Feature modules, shared module, and lazy-loaded routes.',
        substeps: [
          { title: 'Core module', description: 'Singleton services, guards, and interceptors.' },
          { title: 'Shared module', description: 'Reusable components, pipes, and directives.' },
          { title: 'Feature modules', description: 'Domain-scoped pages and state per area.' },
        ],
      },
      {
        title: 'Services and DI',
        description: 'Injectable services, HttpClient, and typed API layers.',
        substeps: [],
      },
      {
        title: 'Forms and validation',
        description: 'Reactive forms, custom validators, and accessible error messaging.',
        substeps: [],
      },
      {
        title: 'Testing',
        description: 'Jasmine/Karma or Jest unit tests, TestBed, and Protractor/Cypress E2E.',
        substeps: [],
      },
      {
        title: 'Production build',
        description: 'AOT compilation, budgets, and deploy to static hosting or SSR.',
        substeps: [],
      },
    ],
  },
  {
    slug: 'html',
    title: 'HTML',
    theme: 'html',
    intro: 'Semantic markup first — accessible, SEO-friendly foundations for every interface.',
    steps: [
      {
        title: 'Semantic structure',
        description: 'Correct landmarks — header, nav, main, article, section, footer.',
        substeps: [],
      },
      {
        title: 'Accessibility',
        description: 'ARIA only when needed, labels, focus order, and keyboard navigation.',
        substeps: [
          { title: 'Forms', description: 'label for, fieldset, legend, and error associations.' },
          { title: 'Media', description: 'alt text, captions, and transcripts where required.' },
          { title: 'Contrast', description: 'WCAG AA color contrast and visible focus states.' },
        ],
      },
      {
        title: 'SEO fundamentals',
        description: 'Title, meta description, canonical URLs, and structured data.',
        substeps: [],
      },
      {
        title: 'Performance markup',
        description: 'Lazy loading images, defer scripts, and minimize DOM depth.',
        substeps: [],
      },
      {
        title: 'Progressive enhancement',
        description: 'Core content works without JS; enhance with CSS and scripts.',
        substeps: [],
      },
      {
        title: 'Validation and standards',
        description: 'W3C validation, cross-browser checks, and HTML5 best practices.',
        substeps: [],
      },
    ],
  },
]

/** Resume page — edit resume object below; replace public/resume.pdf with your file. */
export const resumeSection = {
  downloadLabel: 'Download PDF',
  labels: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Key Projects',
    skills: 'Skills',
    education: 'Education',
  },
  emptyExperience: 'Experience details coming soon.',
}

export const resume = {
  summary:
    'Full stack and mobile developer with 7+ years building production web apps, React Native hybrid products, and Node.js backends. Experienced across HR tech, legal SaaS, and consumer mobile — from architecture and UI to App Store release.',
  experience: [
    {
      company: 'Zing HR',
      role: 'Full Stack Developer',
      period: '2024 — Present',
      location: 'Mumbai, India',
      summary:
        'End-to-end HR platform — React web dashboard and React Native mobile app for attendance, payroll, and performance reviews.',
      highlights: [
        'Built modular web app and hybrid mobile companion with shared Node.js API',
        'Shipped role-based access, real-time notifications, and admin console',
        'Reduced onboarding time and improved employee self-service adoption',
      ],
      stack: ['React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      projects: [
        {
          title: 'Zing HR Platform',
          description:
            'Enterprise HRMS with employee directory, attendance tracking, payroll, and performance review cycles.',
        },
      ],
    },
    {
      company: 'LexFlow Technologies',
      role: 'Frontend Lead',
      period: '2022 — 2024',
      location: 'Mumbai, India',
      summary:
        'Legal-tech startup delivering case management software for mid-size law firms across India.',
      highlights: [
        'Led React frontend for document workflows, matter timelines, and billing modules',
        'Implemented PostgreSQL full-text search across clients, cases, and filings',
        'Cut document retrieval time by 55% through redesigned case-centric navigation',
      ],
      stack: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'GraphQL', 'AWS'],
      projects: [
        {
          title: 'Autolex',
          description:
            'SaaS case management — unified client profiles, court calendars, time tracking, and invoice drafts.',
        },
      ],
    },
    {
      company: 'DigitalCraft Solutions',
      role: 'React Native Developer',
      period: '2019 — 2022',
      location: 'Mumbai, India',
      summary:
        'Agency-style delivery of hybrid mobile apps and Node.js APIs for fitness, collaboration, and startup clients.',
      highlights: [
        'Delivered cross-platform apps with Expo, native navigation, and push notifications',
        'Optimized list rendering and image caching for smooth performance on mid-range devices',
        'Built real-time features including WebRTC huddles and live presence indicators',
      ],
      stack: ['React Native', 'Expo', 'Node.js', 'WebRTC', 'MongoDB'],
      projects: [
        {
          title: 'Regroup',
          description:
            'Fitness community app — training logs, weekly challenges, leaderboards, and social activity feed.',
        },
        {
          title: 'Orbit',
          description:
            'Remote workspace with spatial rooms, one-click audio huddles, and shared boards with cursor presence.',
        },
      ],
    },
  ],
  projects: [
    {
      title: 'Zing HR',
      company: 'Zing HR',
      year: '2025',
      description:
        'Full-stack HR platform with web dashboard and React Native mobile app serving 12K+ active users.',
      stack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Autolex',
      company: 'LexFlow Technologies',
      year: '2024',
      description:
        'Legal case management SaaS used by 18 firms to manage 3.2K+ matters with automated deadline tracking.',
      stack: ['React', 'Next.js', 'PostgreSQL', 'GraphQL'],
    },
    {
      title: 'Regroup',
      company: 'Fitness Community',
      year: '2024',
      description:
        'Hybrid mobile app for athletes — 8.5K monthly active users, 120K posts, and live challenge leaderboards.',
      stack: ['React Native', 'Expo', 'Node.js', 'TypeScript'],
    },
    {
      title: 'Orbit',
      company: 'Remote-First SaaS',
      year: '2023',
      description:
        'Collaboration workspace with WebRTC audio huddles, live presence, and real-time shared boards.',
      stack: ['React', 'Node.js', 'WebRTC'],
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Angular', 'HTML / CSS'] },
    { category: 'Mobile', items: ['React Native', 'Expo', 'iOS & Android', 'Push Notifications'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST & GraphQL', 'AWS'] },
    { category: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'Figma'] },
  ],
  education: [
    {
      school: 'University of Mumbai',
      degree: 'B.E. Computer Engineering',
      period: '2015 — 2019',
    },
  ],
}

export const notFound = {
  headline: 'Page not found.',
  subhead: 'The page you are looking for does not exist.',
  backLabel: 'Back to home',
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
      client: 'LexFlow Technologies',
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
