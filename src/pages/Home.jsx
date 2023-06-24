import React, { useEffect } from 'react'
import AppLayout from '../component/AppLayout'

export default function Home() {

  useEffect(()=>{
    const auth=localStorage.getItem('auth')
    if(!auth)
    {
      window.location.pathname = "/";
    }
  },[])
  return (
    <AppLayout>
      <h1 className='home'>
        Hello! Welcome Back     
      </h1>
    </AppLayout>
  )
}
