import React from 'react'
import Logo from '../utils/shared/component/Logo'
import LogoIcon from '../utils/shared/component/LogoIcon'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Logo/>
        <LogoIcon/>
        <div className="nav-right">
            <button className='login_btn'>
                LOG IN
            </button>
            <button className='signup_btn'>
                SIGN UP
            </button>
        </div>
    </div>
  )
}
