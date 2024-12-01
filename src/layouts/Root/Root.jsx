import React from 'react'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div className='mx-w-6xl lg:m-8 md:m-2'>
      
        <Outlet></Outlet>
      

    </div>
  )
}

export default Root