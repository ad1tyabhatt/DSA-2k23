var lengthOfLastWord = function (s) {
   var cnt = 0;
   for (var i = s.length - 1; i >= 0; i--) {
      if (s[i] == " ") {
         if (cnt > 0) {
            return cnt;
         }
         continue;
      }

      cnt += 1;
   }
   return cnt;
};

var alterMethod = function (s){
   s = s.trim();
   s = s.split(" ")
   return s[s.length-1].length
}


let test = " I am Aditya BHatt ";
console.log(alterMethod(test))
console.log(lengthOfLastWord(test));
