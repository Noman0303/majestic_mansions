import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaSink } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { BiArea } from "react-icons/bi";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';

const EstateDetails = () => {

  useEffect(()=>{
    AOS.init({ duration: 700, // Animation duration in milliseconds 
      easing: 'ease-in-out', // Animation easing function 
      once: true, // Only animate once 
      disable: 'mobile' // Disable animations on mobile devices 
      });
  },[])


  const estates = useLoaderData();
  // console.log('estate:',estates);

  const { id } = useParams();
  // console.log(id)
  const idInt = parseInt(id);



  const estate = estates.find(estate => estate.id === idInt);



  const { location, segment_name, status, estate_title, image, address, year_built, bathrooms, bedrooms, garage, area, description, facilities, points_of_interest } = estate;

  return (

    <div>
      <Header></Header>


      <div className='card '>

        <h2 className="text-4xl font-semibold mb-2 p-2 animate__animated animate__backInLeft">{estate_title} with Amazing View</h2>
        <p className='flex items-center mb-2 p-2'><IoLocationSharp /> {location}</p>
        <img src={image} alt={estate_title} className='max-h-screen w-auto rounded-lg' />

        <div className=' rounded-lg shadow-xl' data-aos="fade-right">
          <p className='mt-8 mb-4 text-xl font-semibold p-1'>Overview:</p>
          <div className='  flex flex-col md:flex-row lg:flex-row justify-evenly mb-8 lg:p-4   p-2'>
            <p className='font-semibold' ><CiCalendarDate /> Year Build : {year_built}</p>
            <p className='font-semibold' ><IoBedOutline />{bedrooms} Bedrooms</p>
            <p className='font-semibold' ><FaSink />{bathrooms} Bathrooms</p>
            <p className='font-semibold'><FaCar />{garage} Garages</p>
            <p className='font-semibold'><BiArea />{area} sq ft</p>
          </div>
        </div>

        <div className='my-8 shadow-lg rounded-lg p-2' data-aos="fade-left">
          <h2 className='text-xl font-semibold'>Description</h2>
          <p>{description}</p>
          <h2 className='my-4'>Address:</h2>
          <p className='mb-8'>{address}</p>
        </div>

        <div className='my-8 shadow-lg rounded-lg p-2' data-aos="fade-right">
          
          <div className='grid items-center md:grid-cols-2 lg:grid-cols-2'>

            <div>
            <h2 className='my-2 font-semibold'>Details</h2>
              <p>Property Id: {id} </p>
              <p>Segment name: {segment_name}</p>
              <p>Property Size:{area} </p>
              <p>Status: {status}</p>
              <p>Bedrooms: {bedrooms}</p>
              <p>Bathrooms: {bathrooms}</p>
              <p>Garages: {garage}</p>
              <p>Year Build: {year_built}</p>
            </div>

            <div>
              <h2 className='font-semibold mt-2'>Facilities:</h2>
              <ul> {facilities.map((facility, index) =>
                (<li key={index}>{facility}</li>))} </ul>
              <h2 className='font-semibold mt-2'>Points of Interest:</h2>
              <ul> {points_of_interest.map((interest, index) =>
                (<li key={index}>{interest}</li>))} </ul>
            </div>
          </div>
        </div>




      </div>

      <Footer></Footer>

    </div>
  )
}

export default EstateDetails