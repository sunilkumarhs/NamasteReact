import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should check the resCards for pizza input text", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  console.log(cardsBeforeSearch.length);
  expect(cardsBeforeSearch.length).toBe(9);

  const srchButton = screen.getByRole("button", { name: "Search" });

  const srchInput = screen.getByTestId("searchInput");

  fireEvent.change(srchInput, { target: { value: "pizza" } });
  fireEvent.click(srchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  console.log(cardsAfterSearch.length);
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should check for the top rated button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeTopRated = screen.getAllByTestId("resCard");
  expect(cardsBeforeTopRated.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });
  expect(topRatedBtn).toBeInTheDocument();
  fireEvent.click(topRatedBtn);

  const cardsAfterTopRated = screen.getAllByTestId("resCard");
  expect(cardsAfterTopRated.length).toBe(7);
});
