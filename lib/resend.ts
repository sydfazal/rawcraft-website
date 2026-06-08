import { Resend } from "resend";
import { ContactFormData } from "@/types";

// Single responsibility: sending contact form emails via Resend

// Lazy instantiation — prevents build crash when RESEND_API_KEY is not yet set
function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

const OWNER_EMAIL = process.env.OWNER_EMAIL!;
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@yourdomain.com";

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const resend = getResendClient();
  const response = await resend.emails.send({
    from: FROM_EMAIL,
    to: OWNER_EMAIL,
    subject: `New Enquiry: ${data.subject}`,
    html: buildEmailHtml(data),
  });

  console.log({ response });
}

function buildEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; color: #1C1208;">
      <h2 style="font-size: 24px; margin-bottom: 24px; color: #5C3D1E;">New Enquiry from Your Website</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #8B6340; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #8B6340; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0;">${data.email}</td></tr>
        ${data.phone ? `<tr><td style="padding: 8px 0; color: #8B6340; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #8B6340; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td><td style="padding: 8px 0;">${data.subject}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #E8D9BC; margin: 24px 0;" />
      <p style="line-height: 1.8; white-space: pre-wrap;">${data.message}</p>
    </div>
  `;
}
