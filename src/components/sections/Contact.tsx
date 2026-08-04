import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import ContactCard from "@/components/shared/ContactCard";
import Container from "@/components/shared/Container";
import Divider from "@/components/shared/Divider";
import Input from "@/components/shared/Input";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import StaggerItem from "@/components/ui/StaggerItem";
import { contacts } from "@/data/contact";
import useContactForm from "@/hooks/useContactForm";

export default function Contact() {
  const { loading, submit } = useContactForm();

  return (
    <Section id="contact">
      <Reveal>
        <Container>
          <SectionTitle title="Get In Touch" subtitle="Contact" />

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
                Let's build something amazing together.
              </h3>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Saya terbuka untuk peluang kerja, kolaborasi, maupun proyek
                freelance. Jangan ragu untuk menghubungi saya.
              </p>

              <Divider className="my-8" />

              <Stagger className="space-y-5">
                {contacts.map((item) => (
                  <StaggerItem key={item.title}>
                    <ContactCard {...item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            {/* RIGHT */}

            <Card className="border-slate-200 p-8 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Send a Message
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Isi formulir di bawah ini dan saya akan membalas secepat
                mungkin.
              </p>

              <Divider className="my-6" />

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

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
