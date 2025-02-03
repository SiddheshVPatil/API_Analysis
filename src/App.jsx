import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Table/>
    </>
  )
}

export default App
