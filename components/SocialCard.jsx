import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialCard = ({ socialItem }) => {

    const cardClass = 'social-card';

    return (
        <a className={ cardClass } href={ socialItem.link } target='_blank' rel='noreferrer'>
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
    )
}

export default SocialCard