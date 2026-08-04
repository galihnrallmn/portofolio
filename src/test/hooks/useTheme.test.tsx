import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThemeProvider, useTheme } from "@/context/ThemeContext";

describe("useTheme", () => {
  it("provides theme context", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });

    expect(result.current.theme).toBeDefined();
  });
});
