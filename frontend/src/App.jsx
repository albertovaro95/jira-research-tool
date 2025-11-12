import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Jira Research Tool</h1>
      <p>Herramienta para Product Managers</p>
      <button onClick={() => setCount(count + 1)}>
        Contador: {count}
      </button>
    </div>
  )
}

export default App
