const nums = [3, 7, 11, 15];
const target = 9;

function TwoSum(arr, target){
    let seen  = new Map()
    let result = false
    for( let num of arr){
        let diff = target - num
        if(seen.has(diff)){
            result = true
        }
        seen.set(num, (seen.get(num)||0)+1)
    }
    console.log(seen);
    return result
}

console.log(TwoSum(nums, target));
