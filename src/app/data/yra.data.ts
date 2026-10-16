export interface Pillar {
  letter: string;
  title: string;
  text: string;
  linkLabel: string;
  route: string;
  tone: 'teal' | 'orange';
}

export const YRA_PILLARS: Pillar[] = [
  { letter: 'P', title: 'PUBLISH', text: 'Build the skills to communicate and publish meaningful research.', linkLabel: 'Explore resources →', route: '/resources', tone: 'teal' },
  { letter: 'R', title: 'RESEARCH', text: 'Develop sound research knowledge, skills and practice.', linkLabel: 'Explore training →', route: '/programmes', tone: 'orange' },
  { letter: 'I', title: 'IMPACT', text: 'Connect research with meaningful academic and societal outcomes.', linkLabel: 'Explore opportunities →', route: '/opportunities', tone: 'teal' },
  { letter: 'C', title: 'COLLABORATE', text: 'Build connections, mentorship and cross-disciplinary partnerships.', linkLabel: 'Join community →', route: '/community', tone: 'orange' },
];


export interface YraEvent {
  id: 'bootcamp' | 'slr' | 'spss';
  title: string;
  imageLabel: string;
  category: 'Training' | 'Seminar' | 'Workshop';
  date: string;
  mode: string;
  duration: string;
  summary: string;
  fee: number;
  gradient?: string;
}

export const EVENTS: YraEvent[] = [
  {
    id: 'bootcamp',
    title: 'YRA Global Research Bootcamp 2026',
    imageLabel: 'RESEARCH BOOTCAMP',
    category: 'Training',
    date: '20 Aug',
    mode: 'Online',
    duration: '4 Weeks',
    summary: 'Intensive research training for emerging researchers and scholars.',
    fee: 15000,
  },
  {
    id: 'slr',
    title: 'How to Write a Systematic Literature Review',
    imageLabel: 'SLR MASTERCLASS',
    category: 'Seminar',
    date: '30 Aug',
    mode: 'Online',
    duration: '1 Day',
    summary: 'Practical session on systematic literature review and publication.',
    fee: 5000,
    gradient: 'linear-gradient(135deg, #ff861b, #ffb56e)',
  },
  {
    id: 'spss',
    title: 'Data Analysis with SPSS for Researchers',
    imageLabel: 'DATA ANALYSIS',
    category: 'Workshop',
    date: '10 Sep',
    mode: 'Online',
    duration: '2 Days',
    summary: 'Hands-on training on data analysis and interpretation.',
    fee: 7500,
  },
];