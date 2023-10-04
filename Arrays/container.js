/**
 * You are given an interger array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i,0) and (o,height[i]).
 * Find the two lines that together with the x -axis from a container, such that the container contains the most water. Return the area of the container which can store the max amount of water. Notice that you may not slant the container
 * 
 */


const maxAreaBruteForce = function(array){
    let area= 0;

    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            const height = Math.min(array[i],array[j])
            const width = Math.abs(j-i)
            area =Math.max(area,height*width)
        }
    }

    return area;

}

let arr = [3,7,5,6,8,4]
// let maxArea = 0;
// area = min(arr[i],arr[j])* Math.abs(j-i)
console.log(maxAreaBruteForce(arr))


//! TWO pointer method

// TC = n;
// SC = 1

const maxArea = function(array){
    let area = 0;
    let i=0;
    let j = array.length-1;
    while(i<j){
        let height = Math.min(array[i],array[j]);
        let newArea = height*(j-i);
        area = Math.max(area,newArea);
        // if(array[i]<array[j]) i++;
        // else j--;
        (array[i]<array[j])?i++:j--; 
    }
    return area;
}

console.log(maxArea([9,1,2,3,10]))