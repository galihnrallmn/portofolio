import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion");
vi.mock("react-scroll", () => ({
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("react-type-animation", () => ({
  TypeAnimation: () => <span>Web Developer</span>,
}));

import Hero from "@/components/sections/Hero";
import { customRender, screen } from "@/test/render";

describe("Hero", () => {
  it("renders hero section", () => {
    customRender(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Web Developer/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /view projects/i,
      }),
    ).toBeInTheDocument();
  });
});
