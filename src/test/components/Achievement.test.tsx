import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion");

import Achievements from "@/components/sections/Achievements";
import { achievements } from "@/data/achievements";
import { customRender, screen } from "@/test/render";

describe("Achievements", () => {
  it("renders achievements section", () => {
    customRender(<Achievements />);

    expect(
      screen.getByRole("heading", {
        name: /achievements/i,
      }),
    ).toBeInTheDocument();

    achievements.forEach((achievement) => {
      expect(screen.getByText(achievement.title)).toBeInTheDocument();

      expect(screen.getByText(achievement.year)).toBeInTheDocument();
    });
  });
});
