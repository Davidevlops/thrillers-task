import React from 'react'
import { BsStarFill } from "react-icons/bs"

const TrendingCard = ({ imageUrl, title, description, price, rateOverFive }) => {
    return (
        <div className="grid grid-cols-5 bg-white gap-4 p-2 border rounded-xl shadow-md">
            <div className="col-span-1">
                <img src={imageUrl} alt={title} className="w-24 h-16 object-cover rounded-lg" />
            </div>
            <div className="col-span-3">
                <h2 className="text-lg font-semibold leading-snug tracking-tighter">{title}</h2>
                <p className="leading-tight text-sm text-gray-700">{description}</p>
                <p className="leading-tight text-base">{price}</p>
            </div>
            <div className="col-span-1 flex gap-2">
                <BsStarFill className='text-yellow-500 ' />
                <p className='leading-tight text-sm'>{rateOverFive}</p>
            </div>
        </div>

    );
};



export default TrendingCard

