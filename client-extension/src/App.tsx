import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </div>
  )
}

export default App
