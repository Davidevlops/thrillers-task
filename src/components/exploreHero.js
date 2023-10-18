import React from 'react'
import ExploreCard from './exploreCard'
import insta from '../images/insta.jpeg'
import uk from '../images/uk.jpeg'
import mon from '../images/mon.jpeg'

const ExploreHero = () => {
    return (
        <div className="mt-4 mx-4">
            <div className="flex">
                <h2 className="text-lg text-bold">Explore France</h2>
            </div>
            <div className="flex mt-4 gap-8">
                <ExploreCard
                    imageUrl={mon}
                    title="Montmartre, France"
                    description="Visit the best tourist area chosen by the audience"
                    price="$360,000,00"
                    rateOverFive="4/5"
                />
                <ExploreCard
                    imageUrl={insta}
                    title="Istanbul, Turkey"
                    description="One of the best selling tours to Turkey and its regions"
                    price="$600,000,00"
                    rateOverFive="5/5"
                />
                <ExploreCard
                    imageUrl={uk}
                    title="London, UK"
                    description="London is one of the most beautiful places to visit"
                    price="$450,000,00"
                />
            </div>
        </div>

    )
}

export default ExploreHero