import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const cardVariants = cva(
  `
    rounded-3xl
    border
    transition-all
    duration-300
  `,
  {
    variants: {
      variant: {
        default: `
          border-slate-200
          bg-white
          shadow-lg
          hover:-translate-y-1
          hover:shadow-2xl
        `,

        glass: `
          border-white/20
          bg-white/10
          backdrop-blur-xl
        `,
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export default function Card({ className, variant, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
  );
}
