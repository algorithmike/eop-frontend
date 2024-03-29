import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";

import instantiateStore from "../../store/store";
import Search from "../Search";

test("should render search field", () => {
  const store = instantiateStore();

  render(
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Provider store={store}>
        <Search />
      </Provider>
    </MuiPickersUtilsProvider>
  );

  const searchInputField = screen.getByPlaceholderText("Search");
  expect(searchInputField).toBeInTheDocument;
});
