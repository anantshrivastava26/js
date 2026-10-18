function isValid(strs){
    let pairs = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    let stack = []
    for(let bracket of strs){
        if(pairs[bracket]){
            stack.push(bracket)
        } else if (bracket === ")" || bracket === "}" || bracket === "]"){
            if(pairs[stack.pop()] !== bracket){
                return false;
            }
        }
    }
    return stack.length === 0
}




console.log(isValid("()[]{}"));