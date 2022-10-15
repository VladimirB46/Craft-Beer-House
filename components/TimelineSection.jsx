import React from 'react'
import Image from 'next/image';

const TimelineSection = ({ section }) => {

    const timelineClass = 'timeline';

    return (
        <div className={`${timelineClass}__section`}>
            <span className={`${timelineClass}__year`}>
                { section.year }
            </span>
            <div className={`${timelineClass}__row`}>
                <div className={`${timelineClass}__image`}>
                    <Image
                        src={ section.image }
                        alt={ section.title }
                        layout='fill'
                        load
                    />
                </div>
                <div className={`${timelineClass}__line`} />
                <div className={`${timelineClass}__content`}>
                    <span className={`${timelineClass}__date`}>
                        { section.date }
                    </span>
                    <h3 className={`${timelineClass}__title`}>
                        { section.title }
                    </h3>
                    { section.text?.map((text, index) => (
                        <p className={`${timelineClass}__text`} key={ index }>
                            { text }
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TimelineSection