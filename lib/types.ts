export interface PersonalInfo {
  name: string
  email: string
  phone: string
  github: string
  linkedin: string
  tistory: string
  location: string
  avatar: string
}

export interface Introduction {
  summary: string
  highlights: string[]
}

export interface Skill {
  category: string
  items: string[]
  level?: number
}

export interface Company {
  id: string
  name: string
  logo: string
  period: string
  position: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  id: string
  school: string
  major: string
  degree: string
  period: string
  gpa?: string
  description?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  description?: string
}

export interface Activity {
  id: string
  name: string
  organization: string
  period: string
  description: string
  achievements?: string[]
}

export interface SideProject {
  id: string
  title: string
  description: string
  period: string
  technologies: string[]
  achievements: string[]
  links?: {
    github?: string
    demo?: string
    blog?: string
  }
}

export interface Goal {
  category: string
  items: string[]
}

export interface Article {
  id: string
  title: string
  summary: string
  date: string
  readTime: string
  tags: string[]
  url: string
  thumbnail?: string
}

export interface CodeSnippet {
  title: string
  language: string
  code: string
  description: string
}

export interface TeamChange {
  period: string
  change: string
  reason: string
}

export interface Contribution {
  category: string
  percentage: number
  color: string
}

export interface Achievement {
  text: string
  category?: string
}

export interface Solution {
  title: string
  description: string
}

export interface Media {
  url: string
  alt: string
  caption?: string
}

export interface StructuralContribution {
  title: string
  problemDescription?: string
  categories: string[]
  solutionList?: Solution[]
  achievementList?: Achievement[]
  media?: Media
}

export interface Retrospective {
  growth: string[]
  challenges: string[]
}

export interface Project {
  projectId: number
  companyId: string
  title: string
  subtitle?: string
  image?: string
  background: string
  detailedDescription?: {
    results: string[]
  }
  structuralContributions?: StructuralContribution[]
  period: string
  role: string
  frontendDevelopers: number
  keywords: string[]
  technologies: string[]
  codeSnippets?: CodeSnippet[]
  contributions?: Contribution[]
  coreStack: string[]
  stateManagement: string[]
  teamChanges: TeamChange[]
  retrospective?: Retrospective
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  introduction: Introduction
  skills: Skill[]
  companies: Company[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  activities: Activity[]
  sideProjects: SideProject[]
  goals: Goal[]
  articles: Article[]
}
