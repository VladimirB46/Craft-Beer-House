import React from 'react';

import ImageBg from '../ImageBg';
import cheerBg from '../../public/images/cheer-grey.jpg';
import Image from 'next/image';

import barleyIcon from '../../public/icons/barley-icon.png';
import sunIcon from '../../public/icons/sun-icon.png';
import barrelIcon from '../../public/icons/barrel-icon.png';
import bottlesIcon from '../../public/icons/bottles-icon.png';

const HomePerks = () => {

    const perkCards = [
        {
            icon: barleyIcon,
            title: 'quality ingridients',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa similique dolore vitae sequi.',
        },
        {
            icon: sunIcon,
            title: 'natural sunshine',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa similique dolore vitae sequi.',
        },
        {
            icon: barrelIcon,
            title: 'fermantation',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa similique dolore vitae sequi.',
        },
        {
            icon: bottlesIcon,
            title: 'unrivaled taste',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa similique dolore vitae sequi.',
        },
    ]

    return (
        <section className='ptb-70'>
            <ImageBg image={ cheerBg } />
            <div className="wrapper">
                <div className="grid--2-columns">
                    { perkCards?.map((perk, index) => (
                        <div className='perk-card' key={ index }>
                            <div className="perk-card__icon">
                                <Image 
                                    src={ perk.icon}
                                    alt={ perk.title }
                                />
                            </div>
                            <h3 className="perk-card__title">
                                { perk.title }
                            </h3>
                            <p className='perk-card__text'>
                                { perk.text }
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomePerks