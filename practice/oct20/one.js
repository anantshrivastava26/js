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

function flattenObj(obj, parent){
    let finalObj = {}
    const generateFlatObj = (obj, parent) => {
        for(let key in obj){
            let value = obj[key];
            let newParent = parent+key
            if(typeof value === 'object'){
                generateFlatObj(value, newParent+".")
            } else{
                finalObj[newParent] = value;
            }
        }
    }
    generateFlatObj(obj, parent);
    return finalObj;
}


console.log(flattenObj(user, ""));
