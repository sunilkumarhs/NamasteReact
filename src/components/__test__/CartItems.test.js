import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
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

  expect(screen.getAllByText("Pizza Hut").length).toBe(2);
});

it("Expanding the menu list by clicking and adding items to cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <CartContexts.Provider value={{ pathState: curPath, setCurPath }}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </CartContexts.Provider>
        </Provider>
      </BrowserRouter>
    );
  });

  const listTitle = screen.getByText("Garlic Bread (6)");
  fireEvent.click(listTitle);

  const itemsAddButtons = screen.getAllByRole("button", { name: "ADD" });

  expect(screen.getByText("Cart-0")).toBeInTheDocument();

  fireEvent.click(itemsAddButtons[0]);

  expect(screen.getByText("Cart-1")).toBeInTheDocument();

  fireEvent.click(itemsAddButtons[1]);

  expect(screen.getByText("Cart-2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(6);
  expect(screen.getAllByTestId("itemsAdded").length).toBe(2);
});
