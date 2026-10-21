console.log(isValid("()[]{}"));


function isValid(strs){
    let pairs  ={
        "(": ")",
        "{":"}",
        "[":"]"
    }
    let stack = []
    for(let str of strs){
        if(pairs[str]){
            stack.push(str)
        } else if(str === ")" || str === "}" || str === "]"){
            if(pairs[stack.pop()] !== str){
                return false;
            }
        }
    }
    return stack.length === 0
}