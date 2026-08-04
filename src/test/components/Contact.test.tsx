import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion");

vi.mock("@/hooks/useContactForm", () => ({
  default: () => ({
    loading: false,
    submit: vi.fn(),
  }),
}));

import Contact from "@/components/sections/Contact";
import { customRender, screen } from "@/test/render";

describe("Contact", () => {
  it("renders contact section", () => {
    customRender(<Contact />);

    expect(
      screen.getByRole("heading", {
        name: /get in touch/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /send message/i,
      }),
    ).toBeInTheDocument();
  });
});
