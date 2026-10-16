function uniqueChar(str){
    let map = {}
    str = str.toLowerCase()
    for(let i of str){
        map[i] = (map[i] || 0 ) +1
    }
    console.log(map);
    
    let res = 0;
    for(let i =0; i< str.length; i++){
        if(map[str.charAt(i)] === 1){
            res = i;
            break
        }
    }
    return str.charAt(res)
}
console.log(uniqueChar("aaabbccdeff"))


