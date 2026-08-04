import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import useScroll from "@/hooks/useScroll";

describe("useScroll", () => {
  it("returns false initially", () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(false);
  });
});
