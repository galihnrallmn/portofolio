interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="font-semibold tracking-[5px] text-blue-600 uppercase">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl font-black lg:text-5xl">{title}</h2>
    </div>
  );
}
