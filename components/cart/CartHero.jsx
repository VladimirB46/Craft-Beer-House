import React from 'react'
import Hero from '../Hero'
import Link from 'next/link'

const CartHero = () => {
    return (
        <Hero>
            <h1 className='text--multiple-rows'>
                <span className='text--gold-dancing-script'>
                    Review your
                </span>
                <span className='title--big'>
                    craft cart
                </span>
            </h1>
            <Link href={'/shop'}>
                <a className='btn btn--primary'>
                    continue shopping
                </a>
            </Link>
        </Hero>
    )
}

export default CartHero