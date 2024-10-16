import { BrowserRouter, Route, Routes } from "react-router-dom"

import { lazy, Suspense } from "react"

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contect = lazy(() => import("./pages/Contect"));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contect" element={<Contect/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
