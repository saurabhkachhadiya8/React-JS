import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./My/About"
import Contact from "./My/Contact"
import Home from "./My/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
