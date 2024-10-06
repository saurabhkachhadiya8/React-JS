import NormalBootstrap from "./pages/NormalBootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import ReactBootstrap from "./pages/ReactBootstrap"

function App() {
  return (
    <div>
      <h1>Normally Bootstrap Attach</h1>
      <NormalBootstrap/>
      <h1 className="mt-5">React Bootstrap Attach</h1>
      <ReactBootstrap/>
    </div>
  )
}

export default App
