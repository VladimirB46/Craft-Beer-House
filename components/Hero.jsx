import React from 'react';

import heroBg from '../public/images/hero-bg-1.jpg';
import Image from 'next/image';


const Hero = ({ fullHeight, children }) => {

    const heroClass = 'hero';
    
    const heroSectionClass = fullHeight ? 'hero hero--100vh' : 'hero';

    return (
        <section className={ heroSectionClass }>
            <div className="background">
                <div className='fallback-dark' />
                <Image
                    layout='fill'
                    src={ heroBg }
                    alt='hero'
                    priority
                />
            </div>
            <div className="wrapper">
                <div className={`${heroClass}__container`}>
                    <div className={`${heroClass}__content`}>
                        { children }
                    </div>
                </div>
            </div>
            <div className='gold-line' />
        </section>
    )
}

export default Hero