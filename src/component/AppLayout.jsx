import React from 'react'
import Navbar from './Navbar'

//Reusable app layout that contains navbar and can have other data 
export default function AppLayout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
