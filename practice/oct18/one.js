const user = {
	name: "Asus",
	contact: {
		email: "asus@example.com",
		address: {
			city: "New York",
			country: "USA"
		}
	}
};

function flattenObj(obj, parent){
    let finalObj = {}
    const generateFlattenObj = (obj, parent) =>{
        for(let key in obj){
            let newParent = parent+key;
            let value = obj[key];
            if(typeof value === 'object'){
                generateFlattenObj(value, newParent+".")
            } else {
                finalObj[newParent] = value;
            }
        }
    }
    generateFlattenObj(obj, parent)
    return finalObj
}



console.log(flattenObj(user, ""));
