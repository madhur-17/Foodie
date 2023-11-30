import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{display:'flex', justifyContent:"space-between",margin:10, border:'1px solid black'}}>
        <img style={{width:100}} alt="logo" src='https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg'/>
        <div >
        <ul style={{display:'flex',listStyleType:'none',}}>
            <li style={{padding:5}}>
            <Link to="/">Homme</Link>
            </li>
            <li style={{padding:5}}>
            <Link to="/about">Aboutus</Link>
            </li>
            <li style={{padding:5}}> Contact</li>
            <li style={{padding:5, marginRight:10}} >cart</li>
      
        </ul>
        </div>
        </div>
  )
}

export default Header
