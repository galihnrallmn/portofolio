import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import useContactForm from "@/hooks/useContactForm";

describe("useContactForm", () => {
  it("returns loading state", () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.loading).toBe(false);
  });

  it("returns submit function", () => {
    const { result } = renderHook(() => useContactForm());

    expect(typeof result.current.submit).toBe("function");
  });
});
