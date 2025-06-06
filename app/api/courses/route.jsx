import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const courseid = searchParams.get("courseId");

  const result = await db
    .select()
    .from(coursesTable)
    .where(eq(coursesTable.cid, courseid));

  console.log(result);

  return NextResponse.json(result[0]);
}
