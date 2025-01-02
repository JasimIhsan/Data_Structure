const twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        console.log(obj);

        if (obj[target - n] >= 0) {
            return [obj[target - n], i];
        } else {
            obj[n] = i;
        }
    }
    console.log(obj);
};

console.log(twoSum([2, 7, 11, 15], 26));

