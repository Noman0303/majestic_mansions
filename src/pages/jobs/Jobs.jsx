import React from 'react'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'

const Jobs = () => {
  return (
    <div>
        <Header></Header>
        <h2 className="text-3xl text-center font-semibold bg-gray-100 mb-8">Jobs</h2>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Join Our Team</h2>
        <p>We believe that our people are our greatest asset. We're always on the lookout for talented, dedicated, and passionate individuals to join our growing team. If you are committed to excellence and want to be part of a dynamic and innovative real estate agency, we’d love to hear from you.</p>
        <h2 className='text-lg mt-4 font-semibold mb-2'>Why Work with Us?</h2>
            <ul className='mb-2'>
                <li><p><span className='text-lg font-semibold '>Career Growth: </span>We offer opportunities for professional development and career advancement.</p></li>
                <li><p><span className='text-lg font-semibold'>Supportive Environment:</span>Join a team that values collaboration, creativity, and mutual support.</p></li>
                <li><p><span className='text-lg font-semibold'>Innovative Culture:</span>Be part of a forward-thinking company that embraces the latest trends and technologies in real estate.</p></li>
            </ul>

            <h2 className='text-lg mt-4 font-semibold mb-2'>Current Openings: </h2>
            <ul className='mb-2'>
                <li><p><span className='text-lg font-semibold '>Real Estate Agent: </span>Help clients find their dream homes by providing expert advice and top-notch service.</p></li>
                <li><p><span className='text-lg font-semibold'>Marketing Specialist: </span>Develop and implement marketing strategies to promote our listings and brand.</p></li>
                <li><p><span className='text-lg font-semibold'>Customer Service Representative: </span>Provide exceptional service to our clients, addressing their needs and inquiries.</p></li>
            </ul>

            <p className='mb-8'><span className='text-lg font-semibold '>How to Apply: </span>To apply for any of the positions listed above, please send your resume and a cover letter to careers@majesticmansions.com. In your cover letter, be sure to include why you are interested in the position and what makes you a great fit for our team.</p>
        <Footer></Footer>
    </div>
  )
}

export default Jobs