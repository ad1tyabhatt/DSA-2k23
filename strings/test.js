function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args){

        sum += arg;
        console.log(arg,sum)
        
    }
    console.log("_____________")
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6
  let a = 1+""-1-2;
  console.log(a)