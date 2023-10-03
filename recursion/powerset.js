/**
 * poweset is the collection of all the subsets.
 * 
 * [1,2,3] ==>  [[],[1],[2],[3],[1,2],[2,3],[1,3],[1,2,3]]
 * 
 * []==> []
 * 
 *! n elements => 2^n subsets
 */

//& recursive solutions


const powerset = function(nums){
    const output = []
    const helper = function(nums,i,subsets){
        if(i===nums.length){
            output.push(subsets.slice());
            return;
        }

        // dont add
        helper(nums,i+1,subsets);

        //add
        subsets.push(nums[i]);
        helper(nums,i+1,subsets);
        subsets.pop();
    }

    helper(nums,0,[]);
    return output
}

let a = [1,2,3]
console.log(powerset(a))