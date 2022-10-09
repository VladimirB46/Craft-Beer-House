import React, { useState } from 'react';
import Link from 'next/link';
import CartItem from '../CartItem';
import Modal from '../Modal';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector, useDispatch } from 'react-redux'
import { getCartItems, getCartTotalPrice, setCartItems } from '../../features/cartSlice';

const Cart = () => {
    
    const cartClass = 'cart';
    
    const dispatch = useDispatch();

    const cartItems = useSelector(getCartItems);

    const cartTotalPrice = useSelector(getCartTotalPrice);

    const [ clearModalOpen, setClearModalOpen ] = useState(false);
    const [ modalSuccess, setModalSuccess ] = useState(false);

    const handleClear = () => {
        dispatch(setCartItems([]));
        setModalSuccess(true);

        setTimeout(() => {
            setClearModalOpen(false);
        }, 2500);
        setTimeout(() => {
            setModalSuccess(false);
        }, 2800);
    }

    return (
        <>
            <section className='ptb-70 bg--light'>
                <div className="wrapper">
                    { cartItems && cartItems.length === 0 &&
                        <div className={`${cartClass}__empty`}>
                            <h3>Your cart is currently empty!</h3>
                            <Link href={'/shop'}>
                                <a className='btn btn--primary btn--white-color'>
                                    start shopping
                                </a>
                            </Link>
                        </div>
                    }
                    { cartItems && cartItems.length > 0 &&
                        <div className={cartClass}>
                            <div className={`${cartClass}__header`}>
                                <h3 className={`${cartClass}__subtitle`}>
                                    Shopping Cart
                                </h3>
                                <button 
                                    className={`${cartClass}__clear ${cartClass}__clear--mobile`} 
                                    onClick={() => setClearModalOpen(true)}
                                >
                                    Clear
                                </button>
                                <div className={`${cartClass}__desktop-labels`}>
                                    <span className={`${cartClass}__label ${cartClass}__label--name`}>
                                        Name
                                    </span>
                                    <span className={`${cartClass}__label ${cartClass}__label--quantity`}>
                                        Quantity
                                    </span>
                                    <span className={`${cartClass}__label ${cartClass}__label--remove`}>
                                        Remove
                                    </span>
                                    <span className={`${cartClass}__label ${cartClass}__label--price`}>
                                        Price
                                    </span>
                                </div>
                            </div>
                            <div className={`${cartClass}__items`}>
                                { cartItems?.map((item) => (
                                    <CartItem item={ item } key={ item.id } />
                                ))}
                            </div>
                            <div className={`${cartClass}__clear-container`}>
                                <button 
                                    className={`${cartClass}__clear ${cartClass}__clear--desktop`} 
                                    onClick={() => setClearModalOpen(true)}
                                >
                                    Clear Cart
                                </button>
                            </div>
                            <div className={`${cartClass}__footer`}>
                                <div className={`${cartClass}__footer__left`}>
                                    <div>
                                        <h3 className={`${cartClass}__discount-subtitle`}>
                                            Enter your discount code:
                                        </h3>
                                        <div className={`${cartClass}__discount`}>
                                            <input type={'text'} className='input input--dark' placeholder='Enter code' />
                                            <button className='btn btn--secondary btn--small btn--white-color'>activate</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${cartClass}__footer__right`}>
                                    <div className={`${cartClass}__total`}>
                                        <div className={`${cartClass}__total-row`}>
                                            <p>Items Total:</p>
                                            <p>{`$${cartTotalPrice}`}</p>
                                        </div>
                                        <div className={`${cartClass}__total-row`}>
                                            <p>Discount:</p>
                                            <p>$0</p>
                                        </div>
                                        <div className={`${cartClass}__total-row`}>
                                            <p>Shipping:</p>
                                            <p>$3</p>
                                        </div>
                                        <div className={`${cartClass}__total-row`}>
                                            <p>Total price:</p>
                                            <p>{`$${cartTotalPrice + 3}`}</p>
                                        </div>
                                    </div>
                                    <button className='btn btn--primary btn--white-color btn--small'>
                                        checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>

            <Modal open={ clearModalOpen } setOpen={ setClearModalOpen }>
                { !modalSuccess && <>
                    <div className='modal__x-icon' />
                    <h3 className='modal__title'>
                        Do you want to clear your cart?
                    </h3>
                    <div className='modal__btns'>
                        <button onClick={() => setClearModalOpen(false)} className='btn btn--small btn--secondary'>
                            cancel
                        </button> 
                        <button onClick={ handleClear } className='btn btn--small btn--red'>
                            clear
                        </button> 
                    </div>
                </>}
                { modalSuccess && <>
                    <div className='modal__checkmark-icon'>
                        <FontAwesomeIcon icon={ faCheck } />
                    </div>
                    <h3 className='modal__title'>
                        Your Cart has been cleared!
                    </h3>
                    <button onClick={() => setClearModalOpen(false)} className='btn btn--small btn--secondary'>
                        close
                    </button> 
                </>}
            </Modal>
        </>
    )
}

export default Cart