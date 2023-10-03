/*

&   Given an array of integers nums containing n+1 integers where each integer is in the range [1,n] inclusive .There is only one repeated number in nums return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra spaces.

*/

const getDuplicate = function (nums){
  let hare = 0;
  let tortoise = 0;

  while(true){
    hare = nums[nums[hare]];
    tortoise = nums[tortoise]
    
    if(hare === tortoise){
      let pointer = 0;
      while(pointer!== tortoise){
        pointer = nums[pointer]
        tortoise = nums[tortoise]
      }
      return pointer;
    }
  }
}

console.log(getDuplicate[5,4,3,2,1])