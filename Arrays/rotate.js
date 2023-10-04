//* Given an array, rotate the array to the right by k steps, where k is a non-negative
//


//! my code
// function rotate(arr,k){
//     // return arr.slice(arr.length-k).arr()
//     let storedArray = arr.slice(arr.length-k);
//     return storedArray.concat(arr.slice(0,arr.length-k))
// }

//! brute force

/*[]
function rotateArray(arr,k){
    const length = arr.length;
    k=k%length;
    const temp = arr.slice(length-k);
    for(let i=length-k-1;i>=0;i--){

        arr[i+k]=arr[i];
    }
    for(let i=0;i<k;i++){
        arr[i]=temp[i];
    }
    return arr;
}


let array = [1,2,3,4,5,6]
console.log(rotateArray(array,2))
*/

const reverse= function(nums,start,end){
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]]
        start++;
        end--;
    }

}

const rotate = function (nums,k){
    k=k%nums.length;
    // nums.reverse()
    reverse(nums,0,nums.length-1);
    
    //start = 0; end = nums.length-1
    reverse(nums,0,k-1);
    
    // start = k, end = length-1
    reverse(nums,k,nums.length-1)

    return nums;
}

console.log(rotate([1,2,4,5],2))