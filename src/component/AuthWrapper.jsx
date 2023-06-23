import React from 'react'

export default function AuthWrapper({children,title}) {
  return (
    <div className='auth-container'>
        <h4 className='auth-title'>{title}</h4>
        {children}
    </div>
  )
}
