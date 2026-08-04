import { FaGithub } from "react-icons/fa";
import { describe, expect, it } from "vitest";

import ContactCard from "@/components/shared/ContactCard";
import { customRender, screen } from "@/test/render";

describe("ContactCard", () => {
  it("renders contact", () => {
    customRender(
      <ContactCard
        icon={FaGithub}
        title="GitHub"
        value="github.com/example"
        href="https://github.com/example"
      />,
    );

    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });
});
