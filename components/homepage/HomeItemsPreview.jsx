import React from 'react'
import Link from 'next/dist/client/link';

import ImageAndContent from '../ImageAndContent';
import SectionTitle from '../SectionTitle';

import beerPourImg from '../../public/images/beer-pouring-1.jpg';
import useFetch from '../useFetch';
import ItemPreviewCard from '../ItemPreviewCard';


const HomeItemsPreview = () => {

    const { data, isLoading, error } = useFetch('https://api.punkapi.com/v2/beers?per_page=3&page=2')

    return (
        <section className='ptb-70 bg--light'>
            <div className="wrapper">
                <div className='content-2-parts content-2-parts--content-left'>
                    <div className='text-container text--dark'>
                        <SectionTitle 
                            textTop={'Explore our'}
                            textBottom={'best quality beer'}
                        />
                        <p>
                            Explore our large catalog of beers, add them to cart, read details about them and add your favourites to your own Saved List and write notes about them.
                        </p>
                        <Link href={'/shop'}>
                            <a className='btn btn--primary btn--white-color'>
                                view beers
                            </a>
                        </Link>
                    </div>
                    <div className="container">
                        <div className='items-preview'>
                            { data?.map((item) => (
                                <ItemPreviewCard item={ item } key={ item.id } />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeItemsPreview