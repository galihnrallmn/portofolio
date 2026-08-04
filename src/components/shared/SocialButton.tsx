import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
  label: string;
}

export default function SocialButton({ icon: Icon, href, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl"
    >
      <Icon size={22} />
    </a>
  );
}
