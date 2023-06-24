import React from 'react'
import Logo from '../utils/shared/component/Logo'
import LogoIcon from '../utils/shared/component/LogoIcon'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/"><Logo/></Link>
        <LogoIcon/>
        <div className="nav-right">
            <Link to="/login" className='btn login_btn'>
                LOG IN
            </Link>
            <Link to="/signup" className='btn signup_btn'>
                SIGN UP
            </Link>
        </div>
    </div>
  )
}
