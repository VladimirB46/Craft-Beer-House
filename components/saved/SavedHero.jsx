import React from 'react'
import Link from 'next/link'
import Hero from '../Hero'

const SavedHero = () => {
    return (
        <Hero fullHeight={false}>
            <h1 className='text--multiple-rows'>
                <span className='text--gold-dancing-script'>
                    Save and take notes about your
                </span>
                <span className='title--big'>
                    favourite beer
                </span>
            </h1>
            <Link href={'/shop'}>
                <a className='btn btn--primary'>
                    view beer
                </a>
            </Link>
        </Hero>
    )
}

export default SavedHero