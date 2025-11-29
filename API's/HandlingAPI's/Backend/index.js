import express from 'express'

const app = express()

app.get("/v1/api/products" , (req,res) => {
    const products = [
  {
    id: "p1",
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    category: "Electronics",
    inStock: true
  },
  {
    id: "p2",
    name: "Running Shoes",
    price: 1999,
    category: "Footwear",
    inStock: false
  },
  {
    id: "p3",
    name: "Smartwatch Series X",
    price: 5499,
    category: "Wearables",
    inStock: true
  },
  {
    id: "p4",
    name: "Cotton Oversized T-Shirt",
    price: 799,
    category: "Clothing",
    inStock: true
  },
  {
    id: "p5",
    name: "Stainless Steel Water Bottle",
    price: 499,
    category: "Home",
    inStock: true
  }
];

if(req.query.search){
    const filterdItems = products.filter(item => item.name.toLowerCase().includes(req.query.search.toLowerCase()))

    res.send(filterdItems)
    return
}
setTimeout(() => {
    res.send(products)
},3000)

})

const PORT = 8000
app.listen(PORT,() => {
    console.log(`App is running on port: ${PORT}`)
})