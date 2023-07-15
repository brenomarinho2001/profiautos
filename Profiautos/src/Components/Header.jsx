import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/profiautos_logo.png'


const Header = () => {
  return (
    <div className='header'>
        <div>
            <Link to={'/'} style={{display:'flex',justifyContent:'center'}}><img src={logo} className='imageprofiautos'/></Link>
        </div>
        {/* <div className='itensheader'>
            <Link to={'/Presenca'} className='links'>Presenca</Link>
        </div> */}
    </div>
  )
}

export default Header