import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuColumn from "../MenuColumn";

test("should render MenuColumn", () => {
  const { container } = render(
    <BrowserRouter>
      <MenuColumn />
    </BrowserRouter>
  );

  const menuColumnDiv = container.querySelector(".menuColumn");
  expect(menuColumnDiv).toBeInTheDocument();
});
