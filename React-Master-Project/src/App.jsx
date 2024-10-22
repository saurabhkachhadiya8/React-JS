import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './style.css'
import Login from "./pages/Login"
import Home from "./pages/users/Home"
import Register from "./pages/Register"
import Dashboard from "./pages/admin/Dashboard"
import Users from "./pages/admin/Users"
import Products from "./pages/admin/Products"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* admin route  */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
