/*

An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone  increasing if all its elements from left to right are non decreasing. An array is monotone decreasing if all its elemnets from left to right are non increasing.Given an integer array return true if the given array is monotonic or false otherwise.

clarification : if array is empty
is an single element array inc or dec?

Test cases :
[1,2,3] => True - mono-inc
[3,2,1] => non - inc => Mono-dec
[1,2,2,3] => mono-inc

*/

function checkMonotonic(arr){
    const left = arr[0];
    const right = arr[arr.length-1];

    if(left===right){
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]!==arr[i]) return false;
        }
    }
    else if(left<right){
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1])return false;
        }
    }
    else{
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]>arr[i]) return false;
        }       
    }
    return true;
}

let a = [3,4,6,8]
let b =[-4,4,5,1,7]
let c = [];
console.log(checkMonotonic(a))
console.log(checkMonotonic(b))
console.log(checkMonotonic(c))