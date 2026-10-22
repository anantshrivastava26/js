const nums = [2, 7, 11, 15];
const target = 9;


function TwoSum(nums, target){
    let seen = new Map()
    for(let num of nums){
        let diff = target - num
        if(seen.has(diff)){
            return true;
        }
        seen.set(num, (seen.get(num) || 0 )+1)
    }
    return false;
}

function TwoSumSet(nums, target){
    let seen = new Set()
    for(let num of nums){
        let diff = target - num
        if(seen.has(diff)){
            return true;
        }
        seen.add(num)
    }
    return false;
}

console.log(TwoSumSet(nums, target));
