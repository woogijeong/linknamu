import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  const collection = await getClicksCollection();
  const docs = await collection.find().toArray();

  const counts = Object.fromEntries(
    docs.map((doc) => [doc.linkId, doc.count]),
  );

  return NextResponse.json(counts);
}
