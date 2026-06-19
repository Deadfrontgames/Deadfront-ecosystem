import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      rank: 1,
      player: "DeadHunter",
      kills: 154
    },
    {
      rank: 2,
      player: "GhostWolf",
      kills: 133
    }
  ]);
}
