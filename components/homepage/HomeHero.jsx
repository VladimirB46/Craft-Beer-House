import React from 'react'
import Hero from '../Hero'
import Link from 'next/dist/client/link';

const HomeHero = () => {
    return (
        <Hero fullHeight={true}>
            <h1 className='text--multiple-rows'> 
                <span className='text--gold-dancing-script'>
                    Over 300 flavors of
                </span>
                <span className='title--big text--multiple-rows'>
                    <span>specially</span>
                    <span>crafted beer</span>
                </span>
            </h1>
            <Link href={'/shop'}>
                <a className='btn btn--primary'>
                    explore
                </a>
            </Link>
        </Hero>
    )
}

export default HomeHero