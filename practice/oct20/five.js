const nums = [2, 7, 11, 15];
const target = 9;


function TwoSum(nums, target){
    let seen = new Map();
    let result = false;
        for(let num of nums){
            let diff = target - num;
            if(seen.has(diff)){
                result = true;
            }
            seen.set(num, (seen.get(num) || 0)+1)
        }

    return result;
}

console.log(TwoSum(nums, target));
