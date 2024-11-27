import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';

const EstateDetails = () => {
    const {id} =useParams();
  return (
    <div>
        <Header></Header>
        <p>{id}</p>
        <Footer></Footer>

    </div>
  )
}

export default EstateDetails