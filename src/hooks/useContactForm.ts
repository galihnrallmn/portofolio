import { useState } from "react";
import toast from "react-hot-toast";

import { sendEmail } from "@/services/email";

export default function useContactForm() {
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,

      email: (form.elements.namedItem("email") as HTMLInputElement).value,

      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    if (!data.name || !data.email || !data.message) {
      toast.error("Please complete all fields.");

      return;
    }

    try {
      setLoading(true);

      await sendEmail(data);

      toast.success("Message sent successfully!");

      form.reset();
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submit,
  };
}
