import React from 'react'

import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'
import Banner from './Banner/Banner'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const estates = useLoaderData();
  console.log(estates)

  return (
    <div>
      <Header></Header>
        <Banner></Banner>
        <h2 className="text-2xl">Estates</h2>
        
        <Footer></Footer>
    </div>
  )
}

export default Home