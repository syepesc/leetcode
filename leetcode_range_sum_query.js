// https://leetcode.com/problems/range-sum-query-immutable/description/

var NumArray = function (nums) {
    this.prefixSum = [];
    this.prefixSum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
    }
};

NumArray.prototype.sumRange = function (left, right) {
    let rightSum = this.prefixSum[right];
    let leftSum = left > 0 ? this.prefixSum[left - 1] : 0;
    return rightSum - leftSum;
};


nums = [-2, 0, 3, -5, 2, -1]
var obj = new NumArray(nums)

console.log(obj.sumRange(0, 2))
console.log(obj.sumRange(2, 5))
console.log(obj.sumRange(0, 5))
console.log(obj.sumRange(0, 1))
console.log(obj.sumRange(0, 0))
console.log(obj.sumRange(3, 4))

