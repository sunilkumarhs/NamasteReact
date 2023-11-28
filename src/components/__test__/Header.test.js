import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the header with the signIn button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const signInButton = screen.getByRole("button", { name: "SignIn" });
  expect(signInButton).toBeInTheDocument();
});

it("should render the header with the cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart-0");
  expect(cartItems).toBeInTheDocument();
});

it("should change the SignIn to SignOut on clicking the signIn button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const signInButton = screen.getByRole("button", { name: "SignIn" });
  fireEvent.click(signInButton);
  const signOutButton = screen.getByRole("button", { name: "SignOut" });
  expect(signOutButton).toBeInTheDocument();
});
