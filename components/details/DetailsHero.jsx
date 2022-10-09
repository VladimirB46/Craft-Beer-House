import React from 'react'
import Hero from '../Hero'
import Link from 'next/link'

const DetailsHero = () => {
    return (
        <Hero>
            <h1 className='text--multiple-rows'>
                <span className='text--gold-dancing-script'>
                    Read details about
                </span>
                <span className='title--big'>
                    our beer
                </span>
            </h1>
            <Link href={'/shop'}>
                <a className='btn btn--primary'>
                    explore other
                </a>
            </Link>
        </Hero>
    )
}

export default DetailsHero