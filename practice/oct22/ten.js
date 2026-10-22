let arr = [10, 50, 70]



arr.forEach((num, i) => {
    setTimeout(() =>{
        console.log(num*2);
    }, 3000 *(i +1))
})