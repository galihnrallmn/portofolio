import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactCard from "@/components/shared/ContactCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

import useContactForm from "@/hooks/useContactForm";

import { contacts } from "@/data/contact";

export default function Contact() {
  const { loading, submit } = useContactForm();

  return (
    <Section id="contact">
      <Container>
        <SectionTitle title="Get In Touch" subtitle="Contact" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold">
              Let's build something amazing together.
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Saya terbuka untuk peluang kerja, kolaborasi, maupun proyek
              freelance. Jangan ragu untuk menghubungi saya.
            </p>

            <div className="mt-10 space-y-5">
              {contacts.map((item) => (
                <ContactCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Right */}
          <form onSubmit={submit} className="space-y-5">
            <Input
              name="name"
              label="Full Name"
              placeholder="Your name"
              required
            />

            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="your@email.com"
              required
            />

            <Input
              textarea
              name="message"
              label="Message"
              placeholder="Write your message..."
              required
            />

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
