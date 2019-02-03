import { getWidthAsPercentOfTotalWidth } from "./percentUtils.js";

describe("percentUtils", () => {
  test("getWidthAsPercentOfTotalWidth should return 250 with total with of 500 and percent of 50", () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});
