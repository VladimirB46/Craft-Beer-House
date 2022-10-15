import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import unavailable from '../public/images/unavailable.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { removeFromCart, decrementInCart, incrementInCart } from '../features/cartSlice';

const CartItem = ({ item }) => {

    const [ removed, setRemoved ] = useState(false);

    const itemContainerCLass = !removed ? 'cart-item' : 'cart-item cart-item--disappear';
    const itemClass = 'cart-item'

    const dispatch = useDispatch();

    const handleDecrement = () => {
        if ( item.cartQuantity === 1) {
            setRemoved(true);
            setTimeout(() => {
                dispatch(removeFromCart(item))
            }, 500);
        } else {
            dispatch(decrementInCart(item));
        }
    }

    const handleIncrement = () => {
        dispatch(incrementInCart(item));
    }

    const handleRemove = () => {
        setRemoved(true);
        setTimeout(() => {
            dispatch(removeFromCart(item))
        }, 500);
    }

    return (
        <div className={ itemContainerCLass }>
            <div className={`${itemClass}__image`}>
                <Image 
                    src={ item.image_url ? item.image_url : unavailable } 
                    alt={ item.name } 
                    layout='fill' 
                />
            </div>
            <div className={`${itemClass}__content`}>
                <Link href={`/details/${item.id}`}>
                    <a className={`${itemClass}__name`}>
                        {item.name}
                    </a>
                </Link>
                <div className={`${itemClass}__controls-and-price`}>
                    <div className={`${itemClass}__quantity-container`}>
                        <button className={`${itemClass}__quantity-btn`} onClick={ handleDecrement }>
                            -
                        </button>
                        <span className={`${itemClass}__quantity`}>
                            { item.cartQuantity }
                        </span>
                        <button className={`${itemClass}__quantity-btn`} onClick={ handleIncrement }>
                            +
                        </button>
                    </div>
                    <button className={`${itemClass}__remove-btn`} onClick={ handleRemove }>
                        <FontAwesomeIcon icon={ faTrashCan } />
                    </button>
                    <span className={`${itemClass}__price`}>
                        {`$${item.cartQuantity * item.price}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem