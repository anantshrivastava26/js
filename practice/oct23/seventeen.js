
function isValid(strs){
    let stack = []
    let pairs = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let str of strs){
        if(pairs[str]){
            stack.push(str)
        } else if (str === ")" || str === "}" || str === "]"){
            if(pairs[stack.pop()]!==str){
                return false
            }
        }
    }
    return stack.length === 0;
}



console.log(isValid("()[]{}"));