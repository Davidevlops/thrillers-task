import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { GiLoveMystery } from "react-icons/gi"

const BestCard = ({ imageUrl, location, price, title, per }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
            <img className="w-full rounded-xl" src={imageUrl} alt={title} />
            <div className="px-2 py-1">
                <h2 className="text-base font-bold text-gray-800">{title}</h2>
                <div className='flex gap-2'>
                    <CiLocationOn className='mt-3' />
                    <p className="text-gray-500 opacity-50 mt-2"> {location}</p>
                </div>
            </div>
            <div className="flex px-2 py-1 justify-between">
                <p className="mt-2">{price} <span className="inline-block text-sm text-gray-500 opacity-50 mr-2">{per}</span></p>
                <div className='border rounded-xl px-2 py-1'>  
                <GiLoveMystery  className='text-lg' />
                </div>
            </div>
        </div>

    )
}

export default BestCard




