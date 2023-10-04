var removeDuplicates = function (nums) {
   let temp = nums[0]; // 0
   let z = 1; //1 // 2
   let count = 0; // 1
   for (let i = 1; i < nums.length; i++) {
      if (temp !== nums[i]) {
         count = 0;
         nums[z] = nums[i];
         temp = nums[i];
         z++;
        //  console.log(z,count,temp)
        } else if (temp == nums[i] && count < 1) {
          nums[z] = nums[i];
          temp = nums[i];
          count++;
          z++;
        }
        console.log(z,count,temp)
      }
      // console.log(z,count,temp)

   return z;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
