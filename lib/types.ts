export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  experience: number
  bio: string
}

export interface MindsetItem {
  title: string
  description: string
}

export interface CapabilityItem {
  title: string
  description: string
}

export interface Introduction {
  mindset: MindsetItem[]
  capabilities: CapabilityItem[]
}

export interface Skills {
  languages: string[]
  ui: string[]
  stateManagement: string[]
  architecture: string[]
  devTools: string[]
  collaborationTools: string[]
}

export interface CodeSnippet {
  title: string
  description?: string
  language: string
  code: string
  filename?: string
}

export interface TechnologyReasoning {
  category: string
  technologies: string[]
  reasoning: string
}

export interface ProjectPhase {
  phase: string
  description: string
  outcomes: string[]
  detailsLink?: {
    title: string
    url: string
    description: string
  }
}

export type Solution = {
  title: string
  description: string
}

export type ImprovementType = "UX" | "DX"

export interface Achievement {
  text: string
  type?: ImprovementType
}

export interface StructuralContribution {
  title: string
  solutionList?: Solution[]
  subtitle?: string
  achievementList: Achievement[]
  media?: {
    type: "image" | "gif"
    url: string
    alt: string
    caption?: string
  } // 미디어 정보 추가
}

export interface TechnicalContribution {
  title: string
  description: string
  achievementList: Achievement[]
}

export interface Project {
  projectId: number
  title: string
  subtitle?: string // 부제목 추가
  background: string
  image?: string
  detailedDescription?: {
    summary: string
    results: string
  }
  projectPhases?: ProjectPhase[]
  structuralContributions?: StructuralContribution[]
  technicalContributions?: TechnicalContribution[]
  period: string
  role: string
  frontendDevelopers?: number
  keywords?: string[]
  technologies?: string[]
  technologyReasoning?: TechnologyReasoning[]
  achievementList?: string[]
  codeSnippets?: CodeSnippet[]
  companyId: string
  problem?: string
  solution?: string
  learning?: string
  // 기여도 정보 추가
  contributions?: {
    category: string
    percentage: number
    color: string
  }[]
}

export interface LearningItem {
  title: string
  description: string
  progress: number
}

export interface LearningCategory {
  title: string
  description: string
}

export interface FutureVision {
  icon: string
  gradient: string
  quote: string
  description: string
}

export interface GoalAchievement {
  title: string
  description: string
}

export interface Goals {
  learningPlan: LearningCategory[]
  futureVision: FutureVision[]
  vision: {
    quote: string
    description: string
  }
}

export interface Company {
  id: string
  name: string
  position: string
  period: string
  duration: string
  achievementList: string[]
}

export interface Article {
  id: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  content: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  introduction: Introduction
  skills: Skills
  projects: Project[]
  goals: Goals
  companies: Company[]
  articles: Article[]
}
