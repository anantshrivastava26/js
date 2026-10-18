console.log(isValid("()[]{}"));

function isValid(str){
    let stack = []
    let pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    for(let char of str){
        if(pairs[char]){
            stack.push(char)
        } else if(char === ")" || char === "}" || char === "]"){
            if(pairs[stack.pop()]!==char){
                return false
            }
        }
    }
    return (stack.length === 0)
}