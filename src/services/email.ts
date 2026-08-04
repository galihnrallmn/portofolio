import emailjs from "@emailjs/browser";

import { emailConfig } from "@/config/email";
import type { ContactFormData } from "@/types/contact";


export function sendEmail(data: ContactFormData) {
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    emailConfig.publicKey,
  );
}
