// ^ make the total possible arrangements of the given array
// if the array is empty return empty array


function allPermutation(nums){
    const permutation = [];
    function helper(nums,i){
        if(i=== nums.length-1){
            permutation.push(nums.slice());
            return;
        }
        for(let j=i;j<nums.length;j++){
            //swap i,j
            [nums[i],nums[j]] = [nums[j],nums[i]];
            //recursive
            helper(nums,i+1);
            //swap i,j 
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    helper(nums,0);
    return permutation;
}

console.log(allPermutation([1,2,3]));