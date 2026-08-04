import { describe, expect, it } from "vitest";

import Card from "@/components/shared/Card";
import { customRender, screen } from "@/test/render";

describe("Card Component", () => {
  it("renders children", () => {
    customRender(
      <Card>
        <p>Portfolio Card</p>
      </Card>,
    );

    expect(screen.getByText("Portfolio Card")).toBeInTheDocument();
  });
});
