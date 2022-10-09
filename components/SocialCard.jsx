import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialCard = ({ socialItem }) => {

    const cardClass = 'social-card';

    return (
        <Link href={ socialItem.link }>
            <a className={ cardClass }>
                <div className={`${cardClass}__icon`}>
                    <FontAwesomeIcon icon={ socialItem.icon } />
                </div>
                <h3 className={`${cardClass}__title`}>
                    { socialItem.title }
                </h3>
                <p className={`${cardClass}__text`}>
                    { socialItem.text }
                </p>
            </a>
        </Link>
    )
}

export default SocialCard