import { sum } from "../sum";
import "@testing-library/jest-dom";

test("sum of the two number testing", () => {
  const result = sum(17, 18);

  //Assertion
  expect(result).toBe(35);
});

test("sum", () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});
