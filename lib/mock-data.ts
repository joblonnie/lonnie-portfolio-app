import type { PortfolioData } from "./types";
import { personalInfoData } from "./mock-data/personal-info";
import { introductionData } from "./mock-data/introduction";
import { skillsData } from "./mock-data/skills";
import { companiesData } from "./mock-data/companies";
import { projectsData } from "./mock-data/projects";
import { educationData } from "./mock-data/education";
import { certificationsData } from "./mock-data/certifications";
import { goalsData } from "./mock-data/goals";
import { articlesData } from "./mock-data/articles";

// 개별 export 추가
export const personalInfo = personalInfoData;
export const introduction = introductionData;
export const skills = skillsData;
export const companies = companiesData;
export const projects = projectsData;
export const education = educationData;
export const certifications = certificationsData;
export const goals = goalsData;
export const articles = articlesData;

export const mockPortfolioData: PortfolioData = {
  personalInfo: personalInfoData,
  introduction: introductionData,
  skills: skillsData,
  companies: companiesData,
  projects: projectsData,
  education: educationData,
  certifications: certificationsData,
  goals: goalsData,
  articles: articlesData,
};

function getEducationTimelineItems() {
  const allItems: Array<{
    type: string;
    data: any;
    date: Date;
  }> = [];
  const education = mockPortfolioData.education;
  const certifications = mockPortfolioData.certifications;

  education.forEach((edu) => {
    const endPeriod = edu.period.split(" - ")[1] || edu.period.split(" - ")[0];
    const [endYear, endMonth] = endPeriod.split(".");
    const endDate = new Date(
      Number.parseInt(endYear),
      Number.parseInt(endMonth) - 1
    );
    allItems.push({
      type: "education",
      data: edu,
      date: endDate, // 졸업 날짜를 기준으로 정렬
    });
  });

  certifications.forEach((cert) => {
    let date: Date;
    if (cert.date.includes("년")) {
      const year = cert.date.match(/(\d{4})년/)?.[1];
      const month = cert.date.match(/(\d{1,2})월/)?.[1] || "12";
      date = new Date(
        Number.parseInt(year || "2023"),
        Number.parseInt(month) - 1
      );
    } else if (cert.date.includes(".")) {
      // "2020.09" 형식 처리 - 월을 정확히 파싱
      const [year, month] = cert.date.split(".");
      date = new Date(Number.parseInt(year), Number.parseInt(month) - 1);
    } else {
      date = new Date(cert.date);
    }
    allItems.push({
      type: "certification",
      data: cert,
      date,
    });
  });

  return allItems;
}
