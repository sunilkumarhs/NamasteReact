import { render } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

it("Should render the search button", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
});
