var wordPattern = function (pattern, s) {
   let str = [];
   s = s.split(" ");
   for (char of s) {
      str.push(char[0]);
   }

   var isIsomorphic = function (s, t) {
      if (s.length !== t.length) return false;

      const sHash = {};
      const tHash = {};

      for (let i = 0; i < s.length; i++) {
         let charS = s[i];
         let charT = t[i];

         if (!sHash[charS]) sHash[charS] = charT;
         if (!tHash[charT]) tHash[charT] = charS;
         if (sHash[charS] !== charT || tHash[charT] !== charS) return false;
      }
      return true;
   };
   let res = str.join("");
  //  console.log(res,pattern)
   return isIsomorphic(pattern, res);
};

console.log(wordPattern("abba", "dog cat cat dog"));
