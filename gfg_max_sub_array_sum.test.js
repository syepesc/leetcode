const maxSubarraySum = require("./gfg_max_sub_array_sum")

test("should return 11", () => {
    expect(maxSubarraySum([2, 3, -8, 7, -1, 2, 3])).toBe(11);
});