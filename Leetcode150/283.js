var moveZeroes = function(nums) {
  let count=0;
  for(let i=0;i<nums.length;i++){
      if(nums[i]==0){
          count ++;
      }
  }
  // console.log(nums.length-count)
  let arrLen = nums.length-count
  for(let i=nums.length;i>=arrLen;i--){
    nums.pop()
      // console.log(nums[i])
  }
  // console.log(nums)
  return nums

};


console.log(moveZeroes([1,3,4,0,2,0,40]))
// console.log([1,3,4,0,2,0,40])