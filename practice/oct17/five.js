const nums = [3, 7, 11, 15];
const target = 9;



function TwoSum(arr, target){
    const map = new Map()
    let result = false
    for(let num of arr){
        let diff = target - num;
        if(map.has(diff)){
            result = true
        }
        
        map.set(num, (map.get(num) || 0)+1)
    }
    console.log(map);
    return result
    
}

console.log(TwoSum(nums, target));
