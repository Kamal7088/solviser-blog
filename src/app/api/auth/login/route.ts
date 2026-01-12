import { NextResponse } from "next/server";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { connectDB } from "@/lib/prisma";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const admin = await Admin.findOne({ email });
  if (!admin) return NextResponse.json({ error: "Invalid" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return NextResponse.json({ error: "Invalid" });

  const token = signToken(admin._id);
  return NextResponse.json({ token });
}
