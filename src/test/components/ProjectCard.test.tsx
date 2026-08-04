import { describe, expect, it } from "vitest";

import ProjectCard from "@/components/shared/ProjectCard";
import { mockProject } from "@/test/mocks/project";
import { customRender, screen } from "@/test/render";

describe("ProjectCard", () => {
  it("renders project title", () => {
    customRender(<ProjectCard project={mockProject} onView={() => {}} />);

    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
  });
});
