import Filter from "./pages/Filter"
import { Products } from "./pages/Data"
import { useEffect, useState } from "react"

function App() {

  const [record, setRecord] = useState([])
  const [cart, setCart] = useState([])

  const category = (name) => {
    if (name === "All") {
      setRecord(Products)
    } else {
      let data = Products.filter((p) => p.category === name)
      setRecord(data)
    }

  }


  const addCart = (id) => {
    let recentData = JSON.parse(localStorage.getItem('cart')) || []
    let find = recentData.find((rec) => rec.id == id);
    if (find) {
      alert("Product already in cart")
      return false;
    }
    Products.map((val) => {
      if (val.id == id) {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
          cart.push(val)
          localStorage.setItem('cart', JSON.stringify(cart))
        } else {
          recentData.push(val)
          localStorage.setItem('cart', JSON.stringify(recentData))
        }
      }
    })
  }
  
  useEffect(() => {
    setRecord(Products)
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [])

  return (
    <div>
      <Filter
        products={record}
        category={category}
        addCart={addCart}
        cart={cart}
      />
    </div>
  )
}

export default App