var canConstruct = function (ransomNote, magazine) {
   if (ransomNote.length > magazine.length) {
      return false;
   }

   let magazineCopy = magazine;

   for (const character of ransomNote) {
      if (magazineCopy.indexOf(character) !== -1) {
        console.log(magazineCopy,character)
         magazineCopy = magazineCopy.replace(character, "");
      } else {
         return false;
      }
   }

   return true;
};

console.log(canConstruct("bb","bba"))



/**
 * var canConstruct = function(ransomNote, magazine) {
    const v = magazine.split(''); //array of letters from magazine
    
    for(let i = 0; i < ransomNote.length; i++){
        if(!v.includes(ransomNote[i])){ //if array doesnt have current letter, return false
            return false
        }
        
        const index = v.indexOf(ransomNote[i])
        v.splice(index,1) //if array does include, then we remove that element from the array so it cant be used twice
    }
    return true
};
 */
