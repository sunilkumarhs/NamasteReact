import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("checking the contact_us component is rendered on screen", () => {
  render(<Contact />);
  const heading = screen.getAllByRole("heading");
  //   console.log(heading);
  //Assertion
  expect(heading.length).toBe(4);
});
test("checking the placeholder name in input box", () => {
  render(<Contact />);
  const name = screen.getByPlaceholderText("name");

  //Assertion
  expect(name).toBeInTheDocument();
});
test("checking the button render by text in the contact component", () => {
  render(<Contact />);
  const submit = screen.getByText("Submit");

  //Assertion
  expect(submit).toBeInTheDocument();
});
test("checking the button render by role in the contact component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});
test("checking the input box render", () => {
  render(<Contact />);
  const textBox = screen.getAllByRole("textbox");

  //Assertion
  expect(textBox.length).not.toBe(2);
});

test("sapmle", () => {
  render(<Contact />);
  const text = screen.getAllByText("Submit");
});

