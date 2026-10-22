let users = [
  { id: 1, customer: "asha", items: [{ sku: "A", qty: 2, price: 100 }, { sku: "B", qty: 1, price: 50 }] },
  { id: 2, customer: "ravi", items: [{ sku: "A", qty: 1, price: 100 }] },
  { id: 3, customer: "asha", items: [] }
]
const express = require('express')

const app = express()



//summarize orders function
function summarizeOrders(users) {
  let summary = new Map()

  for (let user of users) {
    if (!summary.has(user.customer)) {
      summary.set(user.customer, { orders: 0, total: 0 })
    }
    const entry = summary.get(user.customer)
    entry.orders++;
    for (let item of user.items) {
      entry.total += item.price * item.qty
    }
  }

  let finalArr = [...summary]
  return finalArr
}


app.get('/orders', (req, res) => {
    res.json(summarizeOrders(users))
})

const port = 3000;

app.listen(port, () =>{
  console.log(`Listening at ${port}`);
})
