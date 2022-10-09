import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'
import ScrollToTopBtn from './ScrollToTopBtn'

import { useDispatch } from 'react-redux';
import { setCartItems, cartStorageKey } from '../features/cartSlice';
import { setSavedItems, savedStorageKey } from '../features/savedSlice'

const Layout = ({ children }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem(cartStorageKey)) {
            dispatch(setCartItems(JSON.parse(localStorage.getItem(cartStorageKey))));
        }
        if (localStorage.getItem(savedStorageKey)) {
            dispatch(setSavedItems(JSON.parse(localStorage.getItem(savedStorageKey))));
        }
    }, [])

    return (
        <>
            <Head>
                <title>Craft Beer House</title>
            </Head>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
            <ScrollToTopBtn />
        </>
    )
}

export default Layout