/**
 * Given two strings s and t , determine if they are isomorphic . Two strings s and t are isomorphic if the characters in s can be replaced to get it. All occurances of a character must be replaced with another character while preserving the order of characters.No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.
 * 
 * 
 * testcases:
 * 
 * s = "ababr"
 * 
 * t = "eoeoo"
 * ans = false
 * 
 * 
 * 
 */


//! BRUTE FORCE

function isomorphicBrute(s,t){
   if(s.length!==t.length) return false;

   const sHash={}
   const tHash={}

   for(let i=0;i<s.length;i++){
    let charS = s[i];
    let charT = t[i];

    if(!sHash[charS]) sHash[charS]= charT;
    if(!tHash[charT]) tHash[charT] = charS;
    if(sHash[charS]!== charT || tHash[charT]!== charS) return false;
   }

   return true;
}

console.log(isomorphicBrute('axca','bbdb'))

