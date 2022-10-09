import React from 'react'
import Link from 'next/dist/client/link';

import ImageAndContent from '../ImageAndContent';
import SectionTitle from '../SectionTitle';

import beerPourImg from '../../public/images/beer-pouring-1.jpg';

const HomeAbout = () => {
    return (
        <section className='ptb-70 bg--light'>
            <div className="wrapper">
                <ImageAndContent image={ beerPourImg } darkText={ true }>
                    <SectionTitle 
                        textTop={'About our'}
                        textBottom={'brewery'}
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure repellendus perspiciatis distinctio dicta nisi minus possimus veniam eos quis!
                    </p>
                    <Link href={'/our-story'}>
                        <a className='btn btn--primary btn--white-color'>
                            learn more
                        </a>
                    </Link>
                </ImageAndContent>
            </div>
        </section>
    )
}

export default HomeAbout