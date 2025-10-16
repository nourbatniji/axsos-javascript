

let nums = [2, 7, 11, 15]
let target = 9
let indices = []

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] + nums[i + 1]) == target) {
            let ind1 = nums.indexOf(nums[i]);
            let ind2 = nums.indexOf(nums[i + 1]);
            indices.push(ind1, ind2)
           console.log(indices);
        }
    }
}
twoSum(nums, target);


