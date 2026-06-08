import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import { ContactFormData } from "@/types";

export async function POST(request: NextRequest) {
  const body: ContactFormData = await request.json();

  console.log({ body });

  const requiredFields: (keyof ContactFormData)[] = [
    "name",
    "email",
    "subject",
    "message",
  ];
  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return NextResponse.json(
      { error: `Missing required field: ${missingField}` },
      { status: 400 },
    );
  }

  await sendContactEmail(body);
  return NextResponse.json({ success: true }, { status: 200 });
}
