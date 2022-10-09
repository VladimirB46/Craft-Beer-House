import React from 'react'
import SectionTitle from '../SectionTitle';
import Link from 'next/dist/client/link';
import Image from 'next/image';

import partnerLogo1 from '../../public/partners/partner-logo-1.png';
import partnerLogo2 from '../../public/partners/partner-logo-2.png';
import partnerLogo3 from '../../public/partners/partner-logo-3.png';
import partnerLogo4 from '../../public/partners/partner-logo-4.png';
import partnerLogo5 from '../../public/partners/partner-logo-5.png';

const HomePartners = () => {

    const partners = [
        {
            image: partnerLogo1,
            link: '/'
        },
        {
            image: partnerLogo2,
            link: '/'
        },
        {
            image: partnerLogo3,
            link: '/'
        },
        {
            image: partnerLogo4,
            link: '/'
        },
        {
            image: partnerLogo5,
            link: '/'
        },
    ]

    return (
        <section className='ptb-70 bg--light'>
            <div className="wrapper">
                <SectionTitle 
                    textTop={'Our specially'}
                    textBottom={'selected partners'}
                    darkText={ true }
                    centerText={ true }
                />
                <div className='partner-logos-container'>
                    { partners?.map((partner, index) => (
                        <Link href={ partner.link } key={ index }>
                            <a className='partner-logo'>
                                <Image
                                    src={ partner.image }
                                    alt={ partner.link }
                                />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomePartners