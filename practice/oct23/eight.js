const deeplyNestedObject = {
	levelOne: {
		levelTwo: {
			levelThree: {
				levelFour: {
					levelFive: {
						message: "This object is deeply nested"
					}
				}
			}
		}
	}
};


function flattenObj(obj, parent){
    let finalObj = {}
    const generateFlatObj = (obj, parent) => {
        for(let key in obj){
            let newParent = parent+key
            let value = obj[key]
            if(typeof value === 'object'){
                generateFlatObj(value, newParent+".")
            } else {
                finalObj[newParent] = value;
            }
        }
    }
    generateFlatObj(obj, parent)
    return finalObj
}


console.log(flattenObj(deeplyNestedObject, ""));
