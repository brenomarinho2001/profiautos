import { useState } from 'react'
import './App.css'

//2 Reaproveitamento de estrutura
import { Link, Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh'}}>
      <Header/>

      <Outlet/>

      <Footer/>

    </div>

  )
}

export default App
