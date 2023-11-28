import { render, screen } from "@testing-library/react";
import RestaurentCards, { withPromotedLabel } from "../RestaurentCards";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render the RestautrentCard with name", () => {
  render(<RestaurentCards resData={MOCK_DATA[0]} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it("Should render the PromotedRestaurentCard", () => {
  const PromotedRestaurents = withPromotedLabel(RestaurentCards);
  render(<PromotedRestaurents resData={MOCK_DATA[1]} />);
});
