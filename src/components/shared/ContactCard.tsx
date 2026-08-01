import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({ icon: Icon, title, value, href }: Props) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white/70
        p-5
        transition
        hover:border-blue-500
        hover:shadow-lg
      "
    >
      <div className="rounded-xl bg-blue-600 p-4 text-white">
        <Icon size={20} />
      </div>

      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </a>
  );
}
