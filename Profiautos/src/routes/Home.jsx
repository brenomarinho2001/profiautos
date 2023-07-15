import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="container">
        <Link to={'/presenca'}>Realizar Presença</Link>
    </div>
  )
}

export default Home