import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const badgeVariants = cva(
  `
    inline-flex
    items-center
    rounded-full
    px-3
    py-1
    text-sm
    font-medium
  `,
  {
    variants: {
      variant: {
        default: `
          bg-slate-100
          text-slate-700
        `,

        primary: `
          bg-blue-100
          text-blue-700
        `,

        success: `
          bg-green-100
          text-green-700
        `,

        danger: `
          bg-red-100
          text-red-700
        `,
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
