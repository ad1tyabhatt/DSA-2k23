/**
 *  you are given a string.Write a function to check whether the string is a palindrome or not
 * 
 */

//!method 1

function isPalindromeCheck(string){
    let newStrToCompare = "";

    for(let i=string.length-1;i>=0;i--){
        newStrToCompare+=string[i]
    }

    if(string===newStrToCompare){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindromeCheck("aba"))


//! method 2 => array method

function isPalindromeCheck(string){
    let newStrToCompareArray = [];

    for(let i=string.length-1;i>=0;i--){
        newStrToCompareArray.push(string[i]);
    }

    if(newStrToCompareArray.join('')===string){
        return true
    }
    else{
        return false
    }
}

function isPal(str){
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i]!==str[j]) return false;
        else{
            i++;
            j--;
        }
    
    }
    return true
}

console.log(isPal('Aa'))
