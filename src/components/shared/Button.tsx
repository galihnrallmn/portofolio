import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    rounded-xl
    font-semibold
    transition-all
    duration-300
    focus:outline-none
    focus:ring-4
    disabled:pointer-events-none
    disabled:opacity-50
    active:scale-95
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-blue-600
          text-white
          hover:bg-blue-700
          focus:ring-blue-300
        `,

        secondary: `
          bg-slate-900
          text-white
          hover:bg-black
          focus:ring-slate-400
        `,

        outline: `
          border
          border-slate-300
          bg-white
          text-slate-900
          hover:bg-slate-100
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:hover:bg-slate-800
        `,

        ghost: `
          hover:bg-slate-100
          dark:hover:bg-slate-800
        `,

        danger: `
          bg-red-600
          text-white
          hover:bg-red-700
        `,
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6",

        lg: "h-14 px-8 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
