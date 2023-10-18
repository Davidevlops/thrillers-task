import React from 'react'
import { MdOutlineArrowLeft } from "react-icons/md"
import { MdOutlineArrowRight } from "react-icons/md"
import TrendingCard from './trendingCard'
import insta from '../images/insta.jpeg'
import uk from '../images/uk.jpeg'
import mon from '../images/mon.jpeg'

const TrendingHero = () => {
    return (
        <div className="mt-4 mx-4">
            <div className="flex justify-between">
                <h2 className="text-lg text-bold">Trending destinations</h2>
                <div className='flex gap-4'>
                    <div className='bg-white p-1 rounded-xl border border-black'> <MdOutlineArrowLeft className='text-xl' /></div>
                    <div className='bg-purple p-1 rounded-xl border'> <MdOutlineArrowRight className='text-xl text-white' /></div>


                </div>
            </div>
            <div className="flex mt-4 gap-8">
                <TrendingCard
                    imageUrl={mon}
                    title="Montmartre, France"
                    description="Visit the best tourist area chosen by the audience"
                    price="$360,000,00"
                    rateOverFive="4/5"
                />
                <TrendingCard
                    imageUrl={insta}
                    title="Istanbul, Turkey"
                    description="One of the best selling tours to Turkey and its regions"
                    price="$600,000,00"
                    rateOverFive="5/5"
                />
                <TrendingCard
                    imageUrl={uk}
                    title="London, UK"
                    description="London is one of the most beautiful places to visit"
                    price="$450,000,00"
                />
            </div>
        </div>

    )
}

export default TrendingHero