
function groupAnagrams(arr){
    let map = new Map()
    for(let word of arr){
        let count = Array(26).fill(0)
        for(let char of word){
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        let freq = count.join('#');
        if(!map.has(freq)){
            map.set(freq, [])
        }
        map.get(freq).push(word)
    }
    return Array.from(map.values())
}




console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

