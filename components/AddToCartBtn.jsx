import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBox } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCartItems } from '../features/cartSlice';

const AddToCartBtn = ({ item }) => {

    const dispatch = useDispatch();

    const [ clicked, setClicked ] = useState(false);
    const [ linkDisplayed, setLinkDisplayed ] = useState(false);

    const btnClass = !clicked ? 'btn btn--small add-to-cart-btn' : 'btn btn--small add-to-cart-btn add-to-cart-btn--clicked';
    const addClass = 'add-to-cart-btn';

    const cartItems = useSelector(getCartItems);

    useEffect(() => {
        if (cartItems.findIndex(elem => elem.id === item.id) >= 0) setLinkDisplayed(true);
    }, [cartItems])

    const handleAddToCart = () => {
        setClicked(true);
        dispatch(addToCart(item));
        setTimeout(() => {
            setLinkDisplayed(true);
        }, 4500);
    }

    return (
        <>
            { !linkDisplayed &&
                <button onClick={ handleAddToCart } disabled={ clicked } className={btnClass}>
                    <span className={`${addClass}__add`}>
                        add to cart
                    </span>
                    <span className={`${addClass}__added`}>
                        added!
                    </span>
                    <span className={`${addClass}__view`}>
                        view in cart
                    </span>
                    <div className={`${addClass}__cart`}>
                        <FontAwesomeIcon icon={ faShoppingCart } />
                    </div>
                    <div className={`${addClass}__box`}>
                        <FontAwesomeIcon icon={ faBox } />
                    </div>
                </button>
            }
            { linkDisplayed &&
                <Link href={'/cart'}>
                    <a className='btn btn--small btn--green'>
                        view in cart
                    </a>
                </Link>
            }
        </>
    )
}

export default AddToCartBtn