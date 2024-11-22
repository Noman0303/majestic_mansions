import React from 'react'
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header></Header>
        <h2 className="text-2xl">This is Home</h2>
        <Footer></Footer>
    </div>
  )
}

export default Home