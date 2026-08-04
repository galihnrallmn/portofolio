import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "@/context/ThemeContext";

export function customRender(ui: ReactElement) {
  return render(
    <HelmetProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </HelmetProvider>,
  );
}

export * from "@testing-library/react";
