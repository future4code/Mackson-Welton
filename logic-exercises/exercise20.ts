const arrayRotation = (nums: number[], k: number): number[] => {
  if (k <= 0) {
    return nums;
  }

  let array: number[] = [];

  for (let i = nums.length - 1; i >= nums.length - k; i--) {
    array.unshift(nums[i])
  }

  nums.length = nums.length - array.length;
  nums = array.concat(nums);
  
  return nums;
}

const nums: number[] = [-1,-100,3,99];
const k: number = 2;

arrayRotation(nums, k);