import React, { useEffect, useState } from 'react'
import Link from 'next/dist/client/link';
import Image from 'next/image'

import HeaderNav from './HeaderNav';
import logo from '../public/images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { getCartItems } from '../features/cartSlice';

const Header = () => {

    const router = useRouter();

    const [ headerScrolled, setHeaderScrolled ] = useState(false);

    const headerClass = headerScrolled ? 'header header--scrolled' : 'header';

    const handleCheckHeaderScrolled = () => {
        if (window.scrollY > 200) {
            setHeaderScrolled(true);
        }
        else {
            setHeaderScrolled(false);
        }
    }

    useEffect(() => {
        handleCheckHeaderScrolled();

        document.addEventListener('scroll', () => {
            handleCheckHeaderScrolled();
        })
    }, [])

    const cartItems = useSelector(getCartItems);

    const [ navOpen, setNavOpen ] = useState(false);

    const handleNavBtn = () => {
        setNavOpen(!navOpen);
    }


    return (
        <>
            <header className={ headerClass }>
                <div className="wrapper">
                    <div className="header__content">
                        <Link href={'/'}>
                            <a className='header__logo' onClick={() => setNavOpen(false)}>
                                <Image
                                    src={ logo } 
                                    alt=''
                                />
                            </a>
                        </Link>
                        <HeaderNav navOpen={ navOpen } setNavOpen={ setNavOpen } />
                        <Link href={'/cart'}>
                            <a 
                                className={router.asPath === '/cart' ? 'header__cart cart-active' : 'header__cart'}
                                onClick={() => setNavOpen(false)}
                            >
                                <FontAwesomeIcon icon={ faShoppingCart } />
                                <div className='header__cart-amount'>
                                    { cartItems.length }
                                </div>
                            </a>
                        </Link>
                        <button onClick={ handleNavBtn } className={ navOpen ? 'header__nav-btn nav-open' : 'header__nav-btn'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
            <div 
                className={ navOpen ? 'header__overlay nav-open' : 'header__overlay'} 
                onClick={() => setNavOpen(false)}
            />
        </>
    )
}

export default Header