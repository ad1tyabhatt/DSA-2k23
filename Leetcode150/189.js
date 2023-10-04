var rotate = function (nums, k) {
   const reverse = function (nums, start, end) {
      while (start < end) {
         [nums[start], nums[end]] = [nums[end], nums[start]];
         start++;
         end--;
      }
   };
   k = k % nums.length;
   // nums.reverse()
   reverse(nums, 0, nums.length - 1);
   console.log(nums)
   
   //start = 0; end = nums.length-1
   reverse(nums, 0, k - 1);
   console.log(nums)
   
   // start = k, end = length-1
   reverse(nums, k, nums.length - 1);
   console.log(nums)

   return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
