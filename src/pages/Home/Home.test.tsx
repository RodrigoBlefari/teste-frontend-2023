import { test } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "./Home";

test("renders without crashing", () => {
  render(<Home />);
});

test("updates filter when text is entered", async ({ expect }) => {
  render(<Home />);

  const inputNodes = screen.getAllByTestId("filter-input-textbox");
  userEvent.type(inputNodes[0], "teste");

  await waitFor(() => {
    expect((inputNodes[0] as HTMLInputElement).value).toBe("teste");
  });
});
