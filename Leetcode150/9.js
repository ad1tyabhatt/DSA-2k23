var isPalindrome = function(x) {
   x = x.toString()
  let i=0;
  let j=x.length-1;
  while(i<=j){
      if(x[i]!==x[j]) return false;
      else{
          i++;
          j--;
      }
  
  }
  return true
};

console.log(isPalindrome(-121))