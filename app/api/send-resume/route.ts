import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // 이메일 전송 로직

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send resume" }, { status: 500 })
  }
}
