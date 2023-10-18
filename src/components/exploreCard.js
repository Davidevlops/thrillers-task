import React from 'react'

const ExploreCard = ({ imageUrl, title, description, price}) => {
    return (
        <div className="grid grid-cols-3 bg-white gap-4 p-2 border rounded-xl shadow-md">
            <div className="col-span-1">
                <img src={imageUrl} alt={title} className="w-24 h-16 object-cover rounded-lg" />
            </div>
            <div className="col-span-2">
                <h2 className="text-base font-semibold leading-snug tracking-tighter">{title}</h2>
                <p className="leading-tight text-sm text-gray-700">{description}</p>
                <p className="leading-tight text-base">{price}</p>
            </div>
        </div>

    );
};



export default ExploreCard

