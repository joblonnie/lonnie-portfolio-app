import { NextResponse } from "next/server";
import { mockPortfolioData } from "@/lib/mock-data";

export async function GET() {
  try {
    return NextResponse.json({
      personalInfo: mockPortfolioData.personalInfo,
      skills: mockPortfolioData.skills,
      projects: mockPortfolioData.projects,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch resume data" },
      { status: 500 }
    );
  }
}
