import { NextResponse } from "next/server"
import { mockPortfolioData } from "@/lib/mock-data"

export async function GET() {
  try {
    return NextResponse.json(mockPortfolioData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 })
  }
}
