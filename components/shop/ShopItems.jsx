import React, { useEffect, useState } from 'react';
import ShopItem from '../ShopItem';
import Spinner from '../Spinner';
import useFetchMoreItems from '../useFetchMoreItems';
import SectionTitle from '../SectionTitle';


const ShopItems = () => {

    const [ page, setPage ] = useState(1);
    const perPage = 24;
    const { data, isLoading, error, allLoaded } = useFetchMoreItems(`https://api.punkapi.com/v2/beers?per_page=${perPage}&page=${page}`, perPage);

    const handleLoadMore = () => {
        setPage(page + 1)
    }

    return (
        <section className='ptb-70 bg--light'>
            <div className="wrapper">
                <div className='shop-items-container'>
                    { data?.map((item) => (
                        <ShopItem item={ item } key={ item.id } />
                    ))}
                </div>
                <div className="shop__load-more">
                    { isLoading && <Spinner centered={true} />} 
                    { !isLoading && !allLoaded &&
                        <button 
                            className='btn btn--primary btn--white-color'
                            onClick={ handleLoadMore }
                        >
                            load more
                        </button>
                    }
                </div>
                { error && <SectionTitle textBottom={'an error occured'} centerText={true} darkText={true} />}
            </div>
        </section>
    )
}

export default ShopItems