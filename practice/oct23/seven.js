let users = [
  { id: 1, customer: "asha", items: [{ sku: "A", qty: 2, price: 100 }, { sku: "B", qty: 1, price: 50 }] },
  { id: 2, customer: "ravi", items: [{ sku: "A", qty: 1, price: 100 }] },
  { id: 3, customer: "asha", items: [] }
]


function summarizeOrders(users){
    let summary = new Map()
    for(let user of users){
        if(!summary.has(user.customer)){
            summary.set(user.customer, {orderCount: 0, total: 0})
        }
        const entry = summary.get(user.customer)
        entry.orderCount++;
        for(let item of user.items){
            entry.total += item.qty * item.price
        }
    }
    return [...summary]
}


console.log(summarizeOrders(users));
