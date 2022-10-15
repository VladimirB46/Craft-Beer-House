import React, { useEffect, useState } from 'react';
import ShopItem from '../ShopItem';
import Spinner from '../Spinner';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const ShopItems = ({ initialData, perPage }) => {
    const controller = new AbortController();
    
    const [ data, setData ] = useState(initialData);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ allLoaded, setAllLoaded ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ searchInputValue, setSearchInputValue ] = useState('');
    const [ noResults, setNoResults ] = useState(false);

    const handleFetch = async (newPage) => {
        const pending = isLoading;
        if (pending) controller.abort();
        setIsLoading(true);
        setError(null);
        const searchValue = searchInputValue.trim().length > 2 ? searchInputValue.trim() : null;
        const res = await axios.get(
            `https://api.punkapi.com/v2/beers`, { 
            params: {
                per_page: perPage,
                page: newPage,
                beer_name: searchValue,
            },
            signal: controller.signal,
        })
        .then(response => {
            if (response.data.length === 0) setNoResults(true);
            if (response.data.length < perPage) setAllLoaded(true);
            setIsLoading(false);
            return response.data;
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        })
        return res;
    }

    const handleLoadMore = async () => {
        const newPage = page + 1;
        const oldData = data ? [...data] : [];
        setPage(newPage);
        const response = await handleFetch(newPage)
        const newData = response ? [...oldData, ...response] : [...oldData];
        setData(newData);
    }

    const handleSearch = async () => {
        setPage(1);
        setData(null);
        setAllLoaded(false);
        setNoResults(false);
        const newData = await handleFetch(1);
        setData(newData);
    };

    const [ timeoutId, setTimeoutId ] = useState(null);
    
    useEffect(() => {
        if (searchInputValue.trim().length < 3) {
            setData(initialData);
            setPage(1);
            setIsLoading(false);
            setAllLoaded(false);
            setNoResults(false);
        } else {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setTimeoutId(setTimeout(() => {
                handleSearch();
                setTimeoutId(null);
            }, 1500));
        }

    }, [searchInputValue])

    const handleRefresh = () => {
        window.location.reload(false);
    }

    return (
        <>
            <section className='ptb--30 bg--grey-stripes'>
                <div className="wrapper">
                    <div className='search'>
                        <input 
                            type='text'
                            placeholder='Search..'
                            className='input input--light'
                            onChange={(e) => setSearchInputValue(e.currentTarget.value)}
                            value={ searchInputValue }
                        />
                        <button onClick={ handleSearch } className='search__btn'>
                            <FontAwesomeIcon icon={ faMagnifyingGlass } />
                        </button>
                    </div>
                </div>
            </section>
            <section className='ptb-70 bg--light'>
                <div className="wrapper">
                    <div className='shop-items-container'>
                        { data?.map((item) => (
                            <ShopItem item={ item } key={ item.id } />
                        ))}
                    </div>
                    { isLoading && <Spinner centered={true} />} 
                    { !noResults && <div className="shop__bottom">
                        { !isLoading && !allLoaded  && !error &&
                            <button onClick={ handleLoadMore } className='btn btn--primary btn--white-color'>
                                load more
                            </button>
                        }
                        { error && <>
                            <h2 className='title text--dark text--center pt--03-em'>
                                an error occured
                            </h2>
                            <button onClick={ handleRefresh } className='btn btn--primary btn--white-color'>
                                refresh 
                            </button>
                        </>}
                    </div>}
                    { noResults && 
                        <h2 className='title text--dark text--center pt--03-em'>
                            no matching results
                        </h2>
                    }
                </div>
            </section>
        </>
    )
}

export default ShopItems