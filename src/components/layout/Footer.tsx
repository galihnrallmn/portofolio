import Container from "@/components/shared/Container";
import Divider from "@/components/shared/Divider";
import SocialButton from "@/components/shared/SocialButton";
import { siteConfig } from "@/config/site";
import { contacts } from "@/data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = contacts.filter((item) => item.href.startsWith("http"));

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950">
      <Container className="py-14">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Profile */}

          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {siteConfig.name}
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              {siteConfig.title}
            </p>
          </div>

          {/* Social */}

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((item) => (
              <SocialButton
                key={item.title}
                icon={item.icon}
                href={item.href}
                label={item.title}
              />
            ))}
          </div>
        </div>

        <Divider className="my-10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            © {year} {siteConfig.name}. {siteConfig.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
