const obj = { a: { b: 5 }, c: { d: 6, e: { f: 6 } } };

function flattenObj(obj, parent){

  let finalObj = {}
  const generateFlatObj = (obj, parent) => {
    for(let key in obj){
      let value = obj[key]
      let newParent = parent+key;
      if(typeof value === 'object'){
        generateFlatObj(value, newParent+".")
      } else{
        finalObj[newParent] = value;
      }
    }
  }
  generateFlatObj(obj, parent)
  return finalObj;

}

let obj2 = flattenObj(obj, "")
console.log(obj2);



let arr = [1, 2, 3, 4, 5];

function chunk(arr, size){
  let finalArr = []
  let newArr = []
  if(size>arr.length) size = arr.length;
  let n = size

  for(let i = 0; i<arr.length; i++){

    if(n>0){
      newArr.push(arr[i])
      n--;
    } else {
      finalArr.push(newArr)
      newArr = []
      newArr.push(arr[i])
      n = size -1
    }
  }
  
    if(newArr != []){
      finalArr.push(newArr)
    }
  return finalArr
}

console.log(chunk(arr, 3));


