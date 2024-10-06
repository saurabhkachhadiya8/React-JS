import { useState } from "react"
import FunctionCom from "./Component/FunctionCom"
import EmployeeData from "./Component/EmployeeData";

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
      <FunctionCom 
        no={no}
        inc={increment}
        dec={decrement}
        reset={reset}
      />
      <EmployeeData/>
    </div>
  )
}

export default App
