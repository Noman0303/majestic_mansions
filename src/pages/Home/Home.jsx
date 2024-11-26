import React from 'react'

import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'
import Banner from './Banner/Banner'

const Home = () => {
  return (
    <div>
      <Header></Header>
        <Banner></Banner>
        <h2 className="text-2xl">This is Home</h2>
        <Footer></Footer>
    </div>
  )
}

export default Home