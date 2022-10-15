import React from 'react'
import ShopHero from '../components/shop/ShopHero'
import ShopItems from '../components/shop/ShopItems'
import axios from 'axios'

const Shop = ({ initialData, perPage }) => {
    return (
        <>
            <ShopHero />
            <ShopItems initialData={ initialData } perPage={ perPage } />
        </>
    )
}

export default Shop

export const getStaticProps = async () => {
    const perPage = 24;
    const res = await axios.get(
        `https://api.punkapi.com/v2/beers?per_page=${perPage}&page=1`
    )
    const initialData = await res.data

    return {
        props: {
            initialData,
            perPage,
        },
        revalidate: 600,
    }
}