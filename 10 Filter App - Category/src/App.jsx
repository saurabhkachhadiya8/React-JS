import Filter from "./pages/Filter"
import { Products } from "./pages/Data"
import { useEffect, useState } from "react"

function App() {

  const [record,setRecord] = useState([])

  const category = (name) => {
    if(name === "All"){
      setRecord(Products)
    }else{
      let data = Products.filter((p) => p.category === name)
      setRecord(data)
    }
    
  }

  useEffect(() => {
    setRecord(Products)
  }, [])

  return (
    <div align="center">
      <h1>Filter App</h1>
      <Filter 
        products={record}
        category={category}
      />
    </div>
  )
}

export default App