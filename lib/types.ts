export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  experience: number
  bio: string
}

export interface Mindset {
  title: string
  description: string
}

export interface Capability {
  title: string
  description: string
}

export interface Introduction {
  mindset: Mindset[]
  capabilities: Capability[]
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

export interface Achievement {
  text: string
  category: string
}

export interface Solution {
  title: string
  description: string
}

export interface Media {
  url: string
  alt: string
  caption: string
}

export interface StructuralContribution {
  title: string
  solutionList: Solution[]
  achievementList: Achievement[]
  media?: Media
}

export interface DetailedDescription {
  results: string[]
}

export interface Contribution {
  category: string
  percentage: number
  color: string
}

export interface TeamChange {
  period: string
  from: number
  to: number
  reason: string
}

export interface CodeSnippet {
  title: string
  language: string
  code: string
  description: string
}

export interface Project {
  projectId: number
  companyId: string
  title: string
  subtitle?: string
  image?: string
  background: string
  detailedDescription: DetailedDescription
  structuralContributions: StructuralContribution[]
  period: string
  role: string
  frontendDevelopers: number
  keywords: string[]
  technologies: string[]
  codeSnippets: CodeSnippet[]
  contributions: Contribution[]
  coreStack: string[]
  stateManagement: string[]
  teamChanges: TeamChange[]
}

export interface Education {
  institution: string
  degree: string
  period: string
  gpa?: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  description?: string
}

export interface Activity {
  title: string
  organization: string
  period: string
  description: string
  type: string
}

export interface SideProject {
  title: string
  organization: string
  period: string
  description: string
  type: string
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
  learningPlan: any[]
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
  notionUrl: string
  content?: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  introduction: Introduction
  skills: Skills
  companies: Company[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  activities: Activity[]
  sideProjects: SideProject[]
  goals: Goals
  articles: Article[]
}
