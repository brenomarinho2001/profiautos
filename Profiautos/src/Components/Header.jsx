import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/profiautos_logo.png'


const Header = () => {
  return (
    <div className='header'>
        <div style={{display:'flex'}}>
            <img src={logo} className='imageprofiautos'/>
        </div>
        <div className='itensheader'>
            <Link to={'/'} className='links'>Home</Link>
            <Link to={'/Presenca'} className='links'>Presenca</Link>
        </div>
    </div>
  )
}

export default Header