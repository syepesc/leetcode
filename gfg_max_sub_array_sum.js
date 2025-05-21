// https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

function maxSubarraySum(arr = []) {
    let res = arr[0];

    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;

        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];

            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}


module.exports = maxSubarraySum