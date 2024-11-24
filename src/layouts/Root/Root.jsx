import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='mx-w-6xl m-4 '>
        <Outlet></Outlet>
    </div>
  )
}

export default Root