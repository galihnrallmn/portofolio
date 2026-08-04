import { describe, expect, it } from "vitest";

import Divider from "@/components/shared/Divider";
import { customRender, screen } from "@/test/render";

describe("Divider Component", () => {
  it("renders divider", () => {
    customRender(<Divider />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
