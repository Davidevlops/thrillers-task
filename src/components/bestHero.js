import React from 'react'
import uk from '../images/uk.jpeg'
import BestCard from './bestCard'

const BestHero = () => {
    return (
        <div className="mt-4 mx-4">
            <div className="flex justify-between">
                <h2 className="text-lg text-bold">Best Offers</h2>
                <h4 className="text-base my-bg-gray">View All</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mt-4">
                <BestCard
                    imageUrl={uk}
                    title="7 Season's Apartments"
                    location="Kensington/ London"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="Along with the villa"
                    location="Hungary/ Budapest"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="Resort and recreation"
                    location="WilliamStreet / Boxon"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="Beautiful and classy"
                    location="Citadines Opera Paris/ France"
                    price="$65.00"
                    per="/night"
                />
                <BestCard
                    imageUrl={uk}
                    title="Permanent Peace"
                    location="Sugar Apartments/ Brazil"
                    price="$65.00"
                    per="/night"
                />
            </div>
        </div>

    )
}

export default BestHero