import Count from "./pages/Props"
import State from "./pages/State"

function App() {

  return (
    <div>
      <h1 align="center" style={{ color: '#fff', fontSize: '70px', textShadow: ' 0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)' }}>React JS - Class Component</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        <State />
        <Count/>
      </div>
    </div>
  )
}

export default App
