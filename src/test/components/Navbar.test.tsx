import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion");
vi.mock("react-scroll");

import Navbar from "@/components/layout/Navbar";
import { customRender, screen } from "@/test/render";

describe("Navbar", () => {
  it("renders navigation", () => {
    customRender(<Navbar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders mobile menu button", () => {
    customRender(<Navbar />);

    expect(screen.getByLabelText(/toggle navigation/i)).toBeInTheDocument();
  });
});
