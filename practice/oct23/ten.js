function unflattenObj(obj){
    let finalObj = {}
    for(let key in obj){
        let keys = key.split(".")
        let current = finalObj
        for(let i = 0; i<keys.length -1; i++){
            let part = keys[i]
            if(!current[part]){
                current[part] = {}
            }
            current = current[part]
        }
        current[keys[keys.length -1]] = obj[key];
    }
    return finalObj;
}


const flat = {
    "user.name": "Anant",
    "user.address.city": "Chennai",
    "user.address.pincode": 603203
};

console.log(unflattenObj(flat));