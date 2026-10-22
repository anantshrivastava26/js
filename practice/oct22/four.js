const orders = [
  { id: 1, status: "paid", amount: 500 },
  { id: 2, status: "pending", amount: 200 },
  { id: 3, status: "paid", amount: 750 },
  { id: 4, status: "failed", amount: 100 },
];


const grouped = orders.reduce((acc, val) =>{
    if(!acc[val.status]){
        acc[val.status] = []
    }
    acc[val.status].push({id: val.id, amount: val.amount})
    return acc
}, {})

console.log(grouped);


const filtered = orders.filter(x => x.amount>200).map(x => ({id: x.id, amount: x.amount}))
console.log(filtered);
