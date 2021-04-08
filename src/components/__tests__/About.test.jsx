import { render, screen } from "@testing-library/react";
import About from "../About";

test("should render About page", () => {
  render(<About />);

  const aboutHeader = screen.getByRole("heading", { level: 1 });
  expect(aboutHeader.innerHTML).toBe("About");
});
