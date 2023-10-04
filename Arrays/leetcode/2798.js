var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count=0;
    for(h in hours){
      if(hours[h]>=target) count++;
    }
    return count
};

// console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2))

let arr = [2,4,5,1,12]

function res (arr){
  for(h of arr){
    console.log(arr[h])
  }
}

console.log(res(arr))