var removeElement = function(nums, val) {
  // Input: nums = [0,1,2,2,3,0,4,2], val = 2
  // Counter for keeping track of elements other than val
  let count = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
      // If the element is not val
      if (nums[i] !== val) {
          nums[count++] = nums[i];
      }
  }
  return count;
};
console.log(removeElement([3,2,2,3],3))