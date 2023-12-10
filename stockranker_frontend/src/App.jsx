import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Table from './components/table'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Table/>
</>
  )
}

export default App
