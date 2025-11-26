export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  tistory: string;
  location: string;
  avatar: string;
}

export interface Introduction {
  summary: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
  level?: number;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  period: string;
  position: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  school: string;
  major: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Goal {
  category: string;
  items: string[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
  thumbnail?: string;
}

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  description: string;
}

export interface TeamChange {
  period: string;
  change: string;
  reason: string;
}

export interface Contribution {
  category: string;
  percentage: number;
  color: string;
}

export interface Achievement {
  text: string;
  category?: string;
}

export interface Solution {
  title: string;
  description: string;
  technologies?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  reflection?: string;
}

export interface Media {
  url: string;
  alt: string;
  caption?: string;
}

export interface StructuralContribution {
  title: string;
  summary: string;
  problemDescription: string[];
  solutionDescription: string[];
  reflection?: string[];
  technologies: string[];
  media?: Media;
  primaryCategory?: "사용자 경험 개선" | "성능 최적화" | "개발 생산성 향상";
}

export interface Retrospective {
  growth: string[];
  challenges: string[];
}

export interface Project {
  projectId: number;
  companyId: string;
  title: string;
  subtitle?: string;
  image?: string;
  representativeImage?: string;
  background: string;
  projectReflection?: string;
  detailedDescription?: {
    overview?: string;
    role?: string;
    results: string[];
  };
  structuralContributions?: StructuralContribution[];
  period: string;
  role: string;
  frontendDevelopers: number;
  backendDevelopers?: number;
  qaDevelopers?: number;
  productDesigners?: number;
  aiResearchers?: number | string;
  keywords: string[];
  technologies: string[];
  codeSnippets?: CodeSnippet[];
  contributions?: Contribution[];
  coreStack: string[];
  stateManagement: string[];
  teamChanges: TeamChange[];
  retrospective?: Retrospective;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  introduction: Introduction;
  skills: Skill[];
  companies: Company[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  goals: Goal[];
  articles: Article[];
}
