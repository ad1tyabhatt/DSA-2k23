/**
 *  you are given an aray of integers and another targerValue . Write a function that will take these inputs and return the indices of the 2 integer in the array that add up targetValue
 * 
 * clarifying questions
 * 
 * What if not two integers add up the targetValue?
 * 
 * are all numbers positive
 * 
 * what if arr is empty
 * 
 * can i add the same integer to get the target value
 */

/*

 

*/

//! Brute


function indicesSumBrute(arr,target){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(target===arr[i]+arr[j]){
                return [i,j]
            }
        }
    }
    return [];
}

let arr = [1,2,4,6]
console.log(indicesSumBrute(arr,10))


//!better method

function hashIndex(arr,targerVal){
    let neededVal;
    const hashMap={};
    for(let i=0;i<arr.length;i++){
        neededVal = targerVal-arr[i];
        if(neededVal in hashMap){
            return [i,hashMap[neededVal]]
        }
        else{
            hashMap[arr[i]]=i;
        }
    }
    return [];
}

console.log(hashIndex(arr,3))

