import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopBtn = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const [ btnHidden, setBtnHidden ] = useState(true);

    const handleUpdateBtnHidden = () => {
        if (window.scrollY > 400) {
            setBtnHidden(false);
        }
        else {
            setBtnHidden(true);
        }
    }

    useEffect(() => {
        handleUpdateBtnHidden();

        window.onscroll = () => {
            handleUpdateBtnHidden();
        }
    }, [])
    
    return (
        <button 
            className='scroll-to-top-btn'
            onClick={ handleScrollToTop }
            style={{
                display: btnHidden ? 'none' : ''
            }}
        >
            <FontAwesomeIcon icon={ faChevronUp } />
        </button>
    )
}

export default ScrollToTopBtn