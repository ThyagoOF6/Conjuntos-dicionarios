function twoSum(nums, target) {
    const dict = new Map();
    let result = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (dict.has(remainder)) {
            let index = dict.get(remainder);
            result[0] = index;
            result[1] = i;
            return result;
        }
        dict.set(nums[i], i);
    }

    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 5, 7, 2, 4, 8, 1, 6], 15));