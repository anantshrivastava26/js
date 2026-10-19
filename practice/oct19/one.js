strs2 = ["dog","racecar","car"]
strs1 = ["flower","flow","flight"]



function longestCommonPrefix(strs){
    let str = strs[0]
    let strLength = str.length
    for (let index = 0; index < strs.length; index++) {
        let s = strs[index];
        while(str !==s.substring(0, strLength)){
            strLength--;
            if(strLength===0){
                return "No common"
            }
            str = str.substring(0, strLength)
        }
    }
    return str
}
console.log(longestCommonPrefix(strs1));
