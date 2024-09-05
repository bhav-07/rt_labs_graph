import { sensorData } from "@/lib/constant";
import { NextResponse } from "next/server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  await delay(5000);
  return NextResponse.json(sensorData);
}
