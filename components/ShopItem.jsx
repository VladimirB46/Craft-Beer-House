import React from 'react'
import Link from 'next/link';
import AddToCartBtn from './AddToCartBtn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

import { useDispatch, useSelector } from 'react-redux';
import { addToSaved, getSavedItems, removeFromSaved } from '../features/savedSlice';

const ShopItem = ({ item }) => {

    const itemClass = 'shop-item';

    const dispatch = useDispatch();
    
    const savedItems = useSelector(getSavedItems);
    const isSaved = savedItems.findIndex(elem => elem.id === item.id) < 0 ? false : true;

    const handleSaveBtn = () => {
        if (isSaved) {
            dispatch(removeFromSaved(item));
        } else {
            dispatch(addToSaved(item));
        }
    }

    return (
        <div className={ itemClass }>
            <div className={`${itemClass}__image`}>
                <img src={ item.image_url} alt={ item.name } />
            </div>
            <button 
                className={`${itemClass}__save-btn`}
                onClick={ handleSaveBtn }
            >
                <FontAwesomeIcon icon={ isSaved ? faBookmarkSolid : faBookmark } />
            </button>
            <div className={`${itemClass}__content`}>
                <Link href={`/details/${item.id}`}>
                    <a>
                        <h3 className={`${itemClass}__name`}>
                            { item.name }
                        </h3>
                    </a>
                </Link>
                <span className={`${itemClass}__price`}>
                    1.5$
                </span>
                <div className={`${itemClass}__buttons`}>
                    <Link href={`/details/${item.id}`}>
                        <a className='btn btn--small btn--secondary'>
                            details
                        </a>
                    </Link>
                    <AddToCartBtn item={ item } />
                </div>
            </div>
        </div>
    )
}

export default ShopItem