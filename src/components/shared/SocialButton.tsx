import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
}

export default function SocialButton({ icon: Icon, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-slate-300
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-600
        hover:bg-blue-600
        hover:text-white
      "
    >
      <Icon size={18} />
    </a>
  );
}
