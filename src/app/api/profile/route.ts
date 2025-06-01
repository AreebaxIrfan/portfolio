import { NextResponse } from "next/server";
import { RESUME_DATA } from "@/data/resume-data";

export async function GET() {
  return NextResponse.json(RESUME_DATA);
}