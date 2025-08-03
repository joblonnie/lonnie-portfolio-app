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
}

export interface Project {
  projectId: number
  title: string
  background: string
  detailedDescription?: {
    summary: string
    results: string
  }
  projectPhases?: ProjectPhase[]
  period: string
  role: string
  frontendDevelopers?: number
  keywords?: string[]
  technologies?: string[]
  technologyReasoning?: TechnologyReasoning[]
  achievements?: string[]
  codeSnippets?: CodeSnippet[]
  companyId: string
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

export interface Achievement {
  title: string
  description: string
}

export interface Goals {
  learningPlan: LearningCategory[]
  futureVision: FutureVision[]
}

export interface Company {
  id: string
  name: string
  position: string
  period: string
  duration: string
  achievements: string[]
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  introduction: Introduction
  skills: Skills
  projects: Project[]
  goals: Goals
  companies: Company[]
}
