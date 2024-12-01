import React from 'react'

import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'


const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className='p-2 lg:p-4'>
                <h2 className="text-3xl text-center font-semibold bg-gray-100 mb-8">About Us</h2>
                <h1 className='text-4xl mb-4'>Welcome to Majestic Mansions</h1>
                <p className='mb-4'>Here luxury and comfort find their perfect balance. Our mission is to provide our clients with a unique and personalized real estate experience, ensuring that every step of their journey is met with professionalism, integrity, and a touch of elegance.</p>
                <p><span className='text-lg font-semibold'>Who We Are : </span>Majestic Mansions is a premier real estate agency dedicated to helping you find your dream home. With years of experience in the industry, our team of experts is passionate about matching clients with properties that not only meet their needs but also exceed their expectations.</p>
                <h2 className='text-lg mt-4 font-semibold mb-2'>Our Promise : </h2>
                <ul className='mb-2'>
                    <li><p><span className='text-lg font-semibold '>Excellence : </span>We strive for excellence in every aspect of our service, from initial consultations to closing deals. Our commitment to quality ensures that you receive the best possible experience.</p></li>
                    <li><p><span className='text-lg font-semibold'>Transparency : </span>We believe in open communication and transparency. Our clients are kept informed every step of the way, ensuring a smooth and stress-free process.</p></li>
                    <li><p><span className='text-lg font-semibold'>Personalization : </span>Every client is unique, and so are their needs. We take the time to understand your preferences and tailor our services to match your lifestyle and goals.</p></li>
                </ul>
                <h2 className='text-lg mt-4 font-semibold mb-2'>Why Choose Us : </h2>
                <ul className='mb-2'>
                    <li><p><span className='text-lg font-semibold '>Exclusive Listings : </span>Gain access to an extensive portfolio of exclusive listings, including some of the most sought-after properties in the region.</p></li>
                    <li><p><span className='text-lg font-semibold'>Expert Guidance : </span>Our team of seasoned professionals provides expert guidance and support, helping you make informed decisions with confidence.</p></li>
                    <li><p><span className='text-lg font-semibold'>Innovative Solutions : </span>We leverage the latest technology and market insights to provide innovative solutions that set us apart from the rest.</p></li>
                </ul>
                <p className='my-4'><span className='text-lg font-semibold '>Join Us : </span>At Majestic Mansions, we are more than just a real estate agency; we are a community. Join us and embark on a journey to find the perfect home that reflects your unique style and aspirations. Let us help you turn your dream into a reality.</p>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default AboutUs