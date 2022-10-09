import Image from 'next/image';
import React from 'react';
import canIcon from '../../public/icons/can-icon.png';
import mugIcon from '../../public/icons/mug-icon.png';
import logoIcon from '../../public/images/logo.png';
import barrelIcon from '../../public/icons/barrel-side-icon.png';

const HomeAchievements = () => {

    const achievements = [
        {
            icon: canIcon,
            amount: '325',
            text: 'flavours',
        },
        {
            icon: mugIcon,
            amount: '32',
            text: 'outlets',
        },
        {
            icon: logoIcon,
            amount: '65',
            text: 'years brewing',
        },
        {
            icon: barrelIcon,
            amount: '20k+',
            text: 'happy clients',
        },
    ]

    return (
        <section className='ptb-70 bg--dark-grey'>
            <div className="wrapper">
                <div className="grid--4-columns">
                    { achievements?.map((item, index) => (
                        <div className='achievement-card' key={ index }>
                            <div className='achievement-card__icon'>
                                <Image
                                    src={ item.icon }
                                    alt={ item.text }
                                />
                            </div>
                            <span className='achievement-card__amount'>
                                { item.amount }
                            </span>
                            <span className='achievement-card__text'>
                                { item.text }
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeAchievements