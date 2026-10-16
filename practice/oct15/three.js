function groupAnagrams(arr){
    for(let i in arr){
        console.log(arr[i]);
        let map = {}
        let count = {}
        for(let s in arr[i]){
            console.log(count[s] = s-'a')
        }
    }
}



console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
