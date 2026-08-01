import Container from "@/components/shared/Container";
import SocialButton from "@/components/shared/SocialButton";

import { contacts } from "@/data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = contacts.filter((item) => item.href.startsWith("http"));

  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <Container className="py-12">
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-8
            lg:flex-row
          "
        >
          {/* Profile */}

          <div className="text-center lg:text-left">
            <h3 className="mt-4 text-2xl font-bold">
              Muhamad Galih Noor Allamin
            </h3>

            <p className="text-slate-600">Web Developer</p>
          </div>

          {/* Social */}

          <div className="flex gap-4">
            {socials.map((item) => (
              <SocialButton
                key={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>
        </div>

        <div
          className="
            mt-10
            border-t
            border-slate-200
            pt-6
            text-center
            text-sm
            text-slate-500
          "
        >
          © {year} Muhamad Galih Noor Allamin. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
