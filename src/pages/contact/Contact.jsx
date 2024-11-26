import React from 'react'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'

const Contact = () => {
  return (
    <div>
        <Header></Header>
        <h2 className="text-3xl text-center font-semibold bg-gray-100 mb-8">Contacts</h2>
        <h2 className="text-2xl font-semibold mb-2 mt-8">We’d love to hear from you!</h2>
        <p>Whether you have questions about our listings, need support, or just want to say hello, feel free to reach out to us. Our team at Majestic Mansions is here to assist you with all your real estate needs.</p>
        <h2 className='text-lg mt-4 font-semibold mb-2'>Get in Touch: </h2>
            <ul className='mb-2'>
                <li><p><span className='text-lg font-semibold '>Email: </span>info@majesticmansions.com</p></li>
                <li><p><span className='text-lg font-semibold'>Phone: </span>+880-123-456-789</p></li>
                <li><p><span className='text-lg font-semibold'>Address:</span>123 Luxury Lane, Dhaka, Bangladesh</p></li>
            </ul>
            <h2 className='text-lg mt-4 font-semibold mb-2'>Office Hours: </h2>
            <ul className='mb-2'>
                <li><p><span className='text-lg font-semibold '>Monday to Friday: </span>9:00 AM - 6:00 PM</p></li>
                <li><p><span className='text-lg font-semibold'>Saturday: </span>10:00 AM - 4:00 PM</p></li>
                <li><p><span className='text-lg font-semibold'>Sunday: </span>Closed</p></li>
            </ul>
            <p className='mb-8'><span className='text-lg font-semibold '>Follow Us: </span>Stay connected with us on social media for the latest updates and exclusive offers.</p>
        
        <Footer></Footer>
    </div>
  )
}

export default Contact