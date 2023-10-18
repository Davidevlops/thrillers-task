import React from 'react'
import uk from '../images/uk.jpeg'
import BestCard from './bestCard'

const BestHero = () => {
    return (
        <div className="mt-4 mx-4">
            <div className="flex justify-between">
                <h2 className="text-lg text-bold">Best Offers</h2>
                <h4 className="text-base text-blue-500">View All</h4>
            </div>
            <div className="flex gap-4 mt-4">
                <BestCard
                    imageUrl={uk}
                    title="7 Season's Apartments"
                    location="Kensington/ London"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="7 Season's Apartments"
                    location="Kensington/ London"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="7 Season's Apartments"
                    location="Kensington/ London"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="7 Season's Apartments"
                    location="Kensington/ London"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="7 Season's Apartments"
                    location="Kensington/ London"
                    price="$65.00"
                    per="/night"
                />
            </div>
        </div>

    )
}

export default BestHero