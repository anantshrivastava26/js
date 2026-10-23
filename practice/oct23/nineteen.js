function groupAnagrams(strs){
    let map = new Map()
    for(let str of strs){
        let count = Array(26).fill(0)
        for(let letter of str){
            count[letter.charCodeAt(0)- "a".charCodeAt(0)]++;
        }
        let freq = count.join("#")
        if(!map.has(freq)){
             map.set(freq, [])
        }
        map.get(freq).push(str)
    }
    return Array.from(map.values())
}



console.log(groupAnagrams(["cat", "bat", "ate", "nat", "eat", "tan", "tab"]));
