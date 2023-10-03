/*
You are given a string consisting of only lowercase and uppercase english Alphabets and integers 0 to 9. Write a function that will take this string as Input ans return the index of the first character that is non-repeating


i,e the first char that occurs only one time

testcases ->

AaBc1Acbd==> 1

aaAA333==> null

abA ==> 0 uppercase and lowercase are treated same

*/


// function nonRepeat(string){
//     let postion = 0;
//     for(let i=0;i<string.length;i++){
//         for(let j=1;j<string.length;j++){
//             if(string[i]!==string[j]){
//                 postion = i;
//             }
//         }
//     }
//     return postion;
// }

// // const string = AaBc1Acbd;
// console.log(nonRepeat("AaBc1Acbd"))


//! Brute Force 

// let str = "abAA1ac";

//^2 pointer approach   Make sure that pointers are not at equal index
// Nested for loop
//TC O(n^2)
// SC 0(1) since we are not taking any other space

/*

function findNonRepeatingCharacter(string){

    let repeat;
    // a a b b c
    // 0 1 2 3 4

    for(let i=0;i<string.length;i++){
        repeat=false;// here we assume that the char is not repeating
        for(let j=0;j<string.length;j++){
            if(string[i]===string[j] && i!==j){
                repeat = true;
            }
        }
        if(repeat===false){
            return i;
        }
    }

    return null;
}

a = "aabbc"
console.log(findNonRepeatingCharacter(a))

//! HASHtable approach

*/
/*

a b A A 1 a C

first we will get calculate the total occurance of each char with n operations: O(n)
second we will check how many of them have occurance of 1 and return the index of it : O(n)
so TC : o(n)+O(n) ==> O(n)
SC : O(1)
SC expalaination => 26 lowercase + 26 uppercase + 10 digits = 62= O(62)= O(1)

{  char :  count
     'a': 1+1
     'b': 1
     'A': 1+1
     '1': 1
     'c': 1
}

*/

function findNonRepeatingCharacter(string){
    const hashTable = {};
    for(let i=0;i<string.length;i++){
        if(string[i] in hashTable){
            hashTable[string[i]]++;
        }
        else{
            hashTable[string[i]]=1;
        }

    }
    for(let i=0;i<string.length;i++){
        if(hashTable[string[i]]==1){
            return i;
            // break;
        }
    }
    return null;

}

a='abaRb150'
console.log(findNonRepeatingCharacter(a))