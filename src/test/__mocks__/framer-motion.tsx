import type { ReactNode } from "react";

export const motion = new Proxy(
  {},
  {
    get: () => {
      return ({ children, ...props }: { children?: ReactNode }) => (
        <div {...props}>{children}</div>
      );
    },
  },
);

export const AnimatePresence = ({ children }: { children?: ReactNode }) => (
  <>{children}</>
);
