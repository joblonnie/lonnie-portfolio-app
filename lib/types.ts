export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  tistory: string
}

export interface Introduction {
  headline: string
  subtitle: string
  description: string[]
  philosophy: Array<{
    title: string
    description: string
  }>
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

export interface Project {
  projectId: number
  companyId: string
  title: string
  subtitle: string
  period: string
  role: string
  frontendDevelopers: number
  background: string
  image: string
  technologies: string[]
  stateManagement: string[]
  keywords: string[]
  contributions: Array<{
    category: string
    percentage: number
  }>
  structuralContributions: Array<{
    title: string
    categories: string[]
    media?: {
      url: string
      alt: string
      caption: string
    }
    solutionList: Array<{
      title: string
      description: string
    }>
    achievementList: Array<{
      text: string
      category: string
    }>
  }>
  retrospective: {
    growth: string[]
    challenges: string[]
  }
}

export interface Education {
  institution: string
  degree: string
  period: string
  gpa: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  description: string
}

export interface Activity {
  title: string
  organization: string
  period: string
  description: string
}

export interface SideProject {
  title: string
  organization: string
  period: string
  description: string
  technologies: string[]
  status: string
  github?: string
  demo?: string
  image: string
}

export interface Goals {
  learningPlan: Array<{
    title: string
    description: string
  }>
  futureVision: Array<{
    icon: string
    quote: string
    description: string
  }>
  shortTerm: Array<{
    title: string
    description: string
  }>
  longTerm: Array<{
    title: string
    description: string
  }>
  vision: {
    quote: string
    description: string
  }
}

export interface Article {
  id: string
  title: string
  description: string
  category: string
  date: string
  tags: string[]
  notionUrl: string
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
