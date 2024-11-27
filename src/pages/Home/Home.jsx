import React from 'react'

import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'
import Banner from './Banner'
import { useLoaderData } from 'react-router-dom'
import EstateCard from './EstateCard'

const Home = () => {

  const estates = useLoaderData();
  console.log(estates)

  return (
    <div>
      <Header></Header>
        <Banner></Banner>

        {/*  Estate container*/}

        <h2 className=" text-lg md:text-2xl lg:text-4xl font-semibold my-6 text-center">Estates</h2>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-2'>
        {
          estates.map (estate =>
            <EstateCard
            key = {estate.id}
            estate = {estate}
            ></EstateCard>
          )
        }
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default Home