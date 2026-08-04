import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", async () => {
  return await import("../__mocks__/framer-motion");
});

import ProjectModal from "@/components/shared/ProjectModal";
import { projects } from "@/data/projects";
import { customRender, screen } from "@/test/render";

describe("ProjectModal", () => {
  it("renders project information", () => {
    customRender(<ProjectModal project={projects[0]} onClose={vi.fn()} />);

    expect(screen.getByText(projects[0].title)).toBeInTheDocument();
  });

  it("does not render when project is null", () => {
    customRender(<ProjectModal project={null} onClose={vi.fn()} />);

    expect(screen.queryByText("Description")).not.toBeInTheDocument();
  });
});
