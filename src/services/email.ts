import emailjs from "@emailjs/browser";
import type { ContactFormData } from "@/types/contact";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export async function sendEmail(data: ContactFormData) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    PUBLIC_KEY
  );
}
