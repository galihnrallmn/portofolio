import { describe, expect, it } from "vitest";

import Button from "@/components/shared/Button";
import { customRender, screen } from "@/test/render";

describe("Button Component", () => {
  it("renders button text", () => {
    customRender(<Button>Click Me</Button>);

    expect(
      screen.getByRole("button", {
        name: /click me/i,
      }),
    ).toBeInTheDocument();
  });

  it("can be disabled", () => {
    customRender(<Button disabled>Submit</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
