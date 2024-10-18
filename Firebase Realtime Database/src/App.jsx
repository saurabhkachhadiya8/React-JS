import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style.css';
import Add from "./pages/Add"
import View from "./pages/View"
import Edit from "./pages/Edit";

function App() {

  return (
    <BrowserRouter>
      <h1>Firebase Realtime Database</h1>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
