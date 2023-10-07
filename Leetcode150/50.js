// var myPow = function(x, n) {
//   let main = x;
//     while(n!=0 && n!=1){
//       if(n==0) return 1;
//       else if(n<0){
//         x=x*main
//         ++n;
//         // console.log(x,n)
//       }
//       else{
//         x=x*main
//         --n;
//       }
//     }
//     if(x<1) return 1/x
//     else return x
// };

var myPow = function (x, n) {
   let main = x;
   if (n < 0 ) {
    while(n!=0 && n!=-1){
      x = x * main;
      ++n;
      // console.log(x,n)
    }
     return (1/x).toFixed(5);
   }
    if (n > 0) {
      while (n != 0 && n!=1) {
        x = x * main;
        --n;
      }
      return x.toFixed(5)
   } else {
      return 1;
   }
};
console.log(myPow(2, 10));


var myPow = function (x, n) {
  if (n == 0) return 1;

  let pow = Math.abs(n);

  let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};


var myPow = function (x, n) {
  return x**n
};