function unflattenObj(obj){
    let finalObj = {}
    for(let key in obj){
        let keys = key.split(".")
        let current = finalObj
        for(let i = 0; i< keys.length - 1; i++){
            let part = keys[i]
            if(!current[part]){
                current[part] = {}
            }
            current = current[part]
        }
        current[keys[keys.length - 1]] = obj[key]
    }
    return finalObj
}


function flattenObj(obj, parent){
    let finalObj = {}
    const generateFlatObj = (obj, parent) => {
        for(let key in obj){
            let value = obj[key]
            let newParent = parent+key
            if(typeof value === 'object'){
                generateFlatObj(value, newParent+".")
            } else {
                finalObj[newParent] = value
            }
        }
    }
    generateFlatObj(obj, parent)
    return finalObj
}

const flat = {
    "user.name": "Anant",
    "user.address.city": "Chennai",
    "user.address.pincode": 603203
};

const user = {
  id: 101,
  name: "Alex",
  contact: {
    email: "alex@example.com",
    phone: "123-456-7890"
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false
    }
  }
}


console.log(unflattenObj(flat));
console.log(flattenObj(user, ""))

