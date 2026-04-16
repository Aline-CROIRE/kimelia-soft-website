import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    

    if (!process.env.MONGODB_URI) {
      console.error("CRITICAL: MONGODB_URI is not defined in .env.local");
      return NextResponse.json({ error: "Database configuration missing" }, { status: 500 });
    }

    const client = await clientPromise;
    const db = client.db("KimeliaSoft"); 

    const result = await db.collection("registrations").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("DETAILED DATABASE ERROR:", error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}