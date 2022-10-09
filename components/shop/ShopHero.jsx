import React from 'react'
import Hero from '../Hero'
import Link from 'next/link'

const ShopHero = () => {
    return (
        <Hero>
            <h1 className='text--multiple-rows'>
                <span className='text--gold-dancing-script'>
                    A very warm welcome to our
                </span>
                <span className='title--big'>
                    beer shop
                </span>
            </h1>
            <Link href={'/cart'}>
                <a className='btn btn--primary'>
                    view cart
                </a>
            </Link>
        </Hero>
    )
}

export default ShopHero