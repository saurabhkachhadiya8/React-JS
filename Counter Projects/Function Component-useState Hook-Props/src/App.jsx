import { useState } from "react"
import Counter from "./pages/Counter"

function App() {

  const [no,setNo] = useState(0)
  const increment = () => {
    setNo(no+1);
  }
  const decrement = () => {
    setNo(no-1);
  }
  const reset = () => {
    setNo(0);
  }

  return (
    <div>
      <Counter 
        no={no}
        inc={increment}
        dec={decrement}
        reset={reset}
      />
    </div>
  )
}

export default App
