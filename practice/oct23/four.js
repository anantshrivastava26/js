const nums = [2, 8, 11, 15];
const target = 9;


function TwoSumSet(nums, target){
    let seen = new Set()
    for(let num of nums){
        let diff = target - num
        if(seen.has(diff)){
           return true 
        }
        seen.add(num)
    }
    return false;
}

console.log(TwoSumSet(nums, target));
