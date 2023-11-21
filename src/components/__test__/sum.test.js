import { sum } from "../sum";

test("sum of the two number testing", () => {
  const result = sum(17, 18);

  //Assertion
  expect(result).toBe(35);
});
