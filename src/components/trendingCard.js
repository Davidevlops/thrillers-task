import React from 'react'
import { BsStarFill } from "react-icons/bs"

const TrendingCard = ({ imageUrl, title, description, price, rateOverFive }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-white gap-4 p-2 border rounded-xl shadow-md">
            <div className="md:col-span-1 lg:col-span-1">
                <img src={imageUrl} alt={title} className="w-full h-auto md:w-24 lg:w-24 object-cover rounded-lg" />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-lg sm:text-xl lg:text-lg font-semibold leading-snug tracking-tighter">{title}</h2>
                <p className="leading-tight text-sm sm:text-base lg:text-sm text-gray-700">{description}</p>
                <p className="leading-tight text-base sm:text-lg lg:text-base">{price}</p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 flex gap-2">
                <BsStarFill className="text-yellow-500" />
                <p className="leading-tight text-sm">{rateOverFive}</p>
            </div>
        </div>

    );
};



export default TrendingCard

