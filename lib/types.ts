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
  institution: string;
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

export interface FutureVision {
  icon: string;
  gradient: string;
  quote: string;
  description: string;
}

export interface Goal {
  learningPlan: any[];
  futureVision: FutureVision[];
  shortTerm: any[];
  longTerm: any[];
  vision: {
    quote: string;
    description: string;
  };
}

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  notionUrl: string;
}

// Removed unused CodeSnippet and TeamChange types to simplify Project structure

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

export interface StructuralContribution {
  title: string;
  summary: string;
  problemDescription: string[];
  solutionDescription: string[];
  businessImpact?: string[];
  reflection?: string[];
  technologies: string[];
  // Allow flexible categorization beyond three fixed values
  primaryCategory?: string;
  category?: ContributionCategory;
  articleUrl?: string;
}

export type ContributionCategory =
  | "아키텍처"
  | "성능 최적화"
  | "메모리 최적화"
  | "UX 개선"
  | "개발 생산성"
  | "코드 품질"
  | "인프라/배포"
  | "테스트/QA";

export interface Project {
  projectId: number;
  companyId: string;
  title: string;
  subtitle?: string;
  image?: string;
  background: string;
  projectReflection?: string;
  structuralContributions?: StructuralContribution[];
  period: string;
  role: string;
  frontendDevelopers: number;
  backendDevelopers?: number;
  qaDevelopers?: number;
  productDesigners?: number;
  aiResearchers?: number | string;
  technologies: string[];
  contributions?: Contribution[];
  retrospective?: any; // Placeholder for Retrospective type
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  introduction: Introduction;
  skills: Skill[];
  companies: Company[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  goals: Goal;
  articles: Article[];
}
