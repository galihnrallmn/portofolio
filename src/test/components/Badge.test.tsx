import { describe, expect, it } from "vitest";

import Badge from "@/components/shared/Badge";
import { customRender, screen } from "@/test/render";

describe("Badge Component", () => {
  it("renders badge text", () => {
    customRender(<Badge>React</Badge>);

    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
