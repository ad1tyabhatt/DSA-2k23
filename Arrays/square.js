/*

You are given an array of integeres in which each subsequent valur is not less than the previous value.Write a fuunction that takes this array as an input and returns a new array with the squares of each number sorted in ascending order

clarifying question 

1. are all numbers positive?
2. are all intergers distinct?
3. Can array be empty

testcases : can we come together with some testcases

i/p => [1,3,5]=> [1,9,25]

[0,5,6]=> [0,25,36]

[-4,-2,0,1,3]=> [0,1,4,9,16]
*/


/*

//! MY APPROACH

let arr =[-4,-2,0,1,3]

const so = arr.map(a=> Math.abs(a*a));

const sorted = so.sort(function (a,b){
    return a-b
})

console.log(sorted)

*/

//^ BRUTE FORCE

// TC => O(n) [squaring] + O(logn)[squaring]  => nlog(n)
/*
function sortedSquare(array){
    // const newArray = []
    const newArray = new Array(array.length).fill(0);
    for(let i=0;i<array.length;i++){
        newArray[i]= Math.pow(array[i],2);
    }   
    newArray.sort(function(a,b){
        return a-b;
    })

    return newArray;
}

let arr = [-8,-2,1,3,4,7]
console.log(sortedSquare(arr))

*/

// let a = new Array(10).fill(2);
// console.log(a)

function newSorted(array){//
    const newArray = new Array(array.length).fill(0);//[00000]
    let leftPointer = 0;//0
    let rightPointer = array.length-1;// 4
    for(let i=array.length-1;i>=0;i--){
        const left = Math.pow(array[leftPointer],2)
        const right = Math.pow(array[rightPointer],2);
        if(left>right){
            newArray[i]=left;
            leftPointer++;
        }
        else{
            newArray[i]=right;
            rightPointer--;
        }

    }
    return newArray;

}

const a = [-6,-2,4,5,8]

// const ans = a.map((idx)=>{
//     return idx**2
// })
// console.log(ans)

console.log(newSorted(a))