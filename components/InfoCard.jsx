import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({ info }) => {

    const cardClass = 'info-card';

    return (
        <div className={cardClass}>
            <div className={`${cardClass}__icon`}>
                <FontAwesomeIcon icon={ info.icon } />
            </div>
            <div className={`${cardClass}__content`}>
                <h3 className={`${cardClass}__title`}>
                    { info.title }
                </h3>
                { info.text?.map((text, index) => (
                    <p key={ index } className={`${cardClass}__text`}>
                        { text }
                    </p>
                ))}
            </div>
        </div>
    )
}

export default InfoCard