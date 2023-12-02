import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/resMenueData.json";
import CartContexts from "../../utils/CartContexts";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

let curPath;
const setCurPath = () => {
  curPath = "home";
};

it("Checking the render of RestaurentMenu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <CartContexts.Provider value={{ pathState: curPath, setCurPath }}>
            <RestaurantMenu />
          </CartContexts.Provider>
        </Provider>
      </BrowserRouter>
    );
  });

  expect(screen.getAllByText("Nandhana Palace")).toBeInTheDocument();
});
