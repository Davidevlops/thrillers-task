import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import TrendingHero from '../components/trendingHero'
import BestHero from '../components/bestHero'
import ExploreHero from '../components/exploreHero'

const Main = () => {
    // bg-gray-300
    return (
        <div className='col-span-5  '>
            <Nav />
            <Header />
            <TrendingHero />
            <BestHero />
            <ExploreHero />
        </div>
    )
}

export default Main