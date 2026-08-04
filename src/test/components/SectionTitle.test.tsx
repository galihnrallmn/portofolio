import { describe, expect, it } from "vitest";

import SectionTitle from "@/components/shared/SectionTitle";
import { customRender, screen } from "@/test/render";

describe("SectionTitle", () => {
  it("renders title", () => {
    customRender(<SectionTitle title="Projects" subtitle="Portfolio" />);

    expect(screen.getByText("Projects")).toBeInTheDocument();

    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });
});
