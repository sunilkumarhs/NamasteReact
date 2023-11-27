import { sum } from "../sum";


test("sum of the two number testing", () => {
  const result = sum(17, 18);

  //Assertion
  expect(result).toBe(35);
});

test("sum", () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});

it("sum of a,b", () => {
  const res = sum(2, 6);
  expect(res).toBe(8);
});