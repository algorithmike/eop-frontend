import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "../PageNotFound";

test("should render 404 page", () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );

  const pageNotFound = screen.getByRole("heading", { level: 1 });
  expect(pageNotFound.innerHTML).toBe("Nothing To See Here!");
});
