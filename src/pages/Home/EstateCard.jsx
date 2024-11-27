import React from 'react'
import { BiExpand } from "react-icons/bi";
import { Link } from 'react-router-dom';


const EstateCard = ({ estate }) => {

    const { estate_title, image, id, segment_name, price, status, area, location, facilities, description } = estate;

    return (
        <div className=" card shadow-2xl mb-4 bg-base-100 w-full p-4 relative">

            <div className='felx absolute right-5 top-6'>
                <div className="badge bg-gray-200  font-semibold">{segment_name}</div>
                <div className="badge  bg-gray-200  ml-4 font-semibold items-center">{status}</div>
            </div>

            <img
                src={image}
                alt="estate image"
                className='w-auto rounded-xl' />
            <h2 className="text-xl font-semibold ">{estate_title}</h2>
            <div>
                {
                    description.length > 200 ?
                        <p>{description.slice(0, 100)}....</p> :
                        <p>{description}</p>
                }
            </div>

            <p className='text-blue-900 font-semibold mt-2 text-lg'>$ {price} USD</p>



            <div className='flex items-center gap-4 mt-2'>
                <BiExpand />
                <p className='text-lg font-semibold'>{area}</p>
            </div>





            <div className='card-actions justify-end'>
                <button className="btn btn-primary ">
                    <Link to={`/estate/${id}`}>View Property</Link></button>
            </div>

        </div>
    )
}

export default EstateCard