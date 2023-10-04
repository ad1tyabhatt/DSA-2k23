var maximumWealth = function (accounts) {
   let wealth = 0;
   let maxWealth = 0;

   function getSumOfArray(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
      }
      return sum;
   }
   for (user of accounts) {
      wealth = getSumOfArray(user);
      maxWealth = Math.max(wealth, maxWealth);
   }
   return maxWealth;
};

console.log(
   maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
   ])
);
