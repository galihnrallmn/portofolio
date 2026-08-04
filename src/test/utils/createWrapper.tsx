import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "@/context/ThemeContext";

interface Props {
  children: ReactNode;
}

export default function CreateWrapper({ children }: Props) {
  return (
    <HelmetProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HelmetProvider>
  );
}
