import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuRow from "../MenuRow";

test("should render MenuRow", () => {
  render(
    <BrowserRouter>
      <MenuRow endpoint="/" text="Main" />
    </BrowserRouter>
  );

  const menuRow = screen.getByText("Main");
  expect(menuRow).toBeInTheDocument();
});
