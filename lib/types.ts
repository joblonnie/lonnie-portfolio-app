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

export interface Company {
  id: string
  name: string
  position: string
  period: string
  duration: string
  achievementList: string[]
}

export type ImprovementCategory = "성능최적화" | "사용자경험" | "개발효율성" | "시스템안정성" | "협업개선" | "품질향상"

export interface Achievement {
  text: string
  category: ImprovementCategory
}

export interface Solution {
  title: string
  description: string
}

export interface MediaContent {
  url: string
  alt: string
  caption?: string
}

export interface StructuralContribution {
  title: string
  solutionList: Solution[]
  achievementList: Achievement[]
  media?: MediaContent
}

export interface DetailedDescription {
  summary: string
  results: string[]
}

export interface Contribution {
  category: string
  percentage: number
  color: string
}

export interface TeamChange {
  period: string
  frontendDevelopers: number
  reason: string
}

export interface CodeSnippet {
  title: string
  language: string
  code: string
  description?: string
}

export interface Project {
  projectId: number
  companyId: string
  title: string
  subtitle?: string
  image?: string
  background: string
  detailedDescription?: DetailedDescription
  structuralContributions?: StructuralContribution[]
  period: string
  role: string
  frontendDevelopers: number
  keywords?: string[]
  technologies?: string[]
  codeSnippets?: CodeSnippet[]
  contributions?: Contribution[]
  coreStack?: string[]
  stateManagement?: string[]
  teamChanges?: TeamChange[]
}

export interface LearningPlan {
  title: string
  description: string
}

export interface FutureVision {
  icon: string
  gradient: string
  quote: string
  description: string
}

export interface Vision {
  quote: string
  description: string
}

export interface Goals {
  learningPlan: LearningPlan[]
  futureVision: FutureVision[]
  vision: Vision
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
  companies: Company[]
  projects: Project[]
  goals: Goals
  articles: Article[]
}
