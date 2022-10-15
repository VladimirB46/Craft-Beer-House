import React from 'react'
import Link from 'next/dist/client/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '../public/images/logo.png';


const Footer = () => {

    const footerClass = 'footer';

    const content = {
        columns: [
            {
                logo: logo,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
                socials: [
                    {
                        icon: faFacebookF,
                        link: 'https://www.facebook.com/',
                    },
                    {
                        icon: faTwitter,
                        link: 'https://twitter.com/',
                    },
                    {
                        icon: faLinkedin,
                        link: 'https://www.linkedin.com/',
                    },
                    {
                        icon: faInstagram,
                        link: 'https://www.instagram.com/',
                    },
                ]
            },
            {
                subtitle: 'explore',
                nav: [
                    {
                        link: '/',
                        label: 'home',
                    },
                    {
                        link: '/shop',
                        label: 'shop',
                    },
                    {
                        link: '/saved',
                        label: 'saved',
                    },
                    {
                        link: '/our-story',
                        label: 'our story',
                    },
                    {
                        link: '/contact',
                        label: 'contact',
                    },
                ]
            },
            {
                subtitle: 'Get in Touch',
                info: [
                    {
                        icon: faHouse,
                        text: '94 River Road, London'
                    },
                    {
                        icon: faPhone,
                        text: '+132 456789'
                    },
                    {
                        icon: faEnvelope,
                        text: 'email@gmail.com'
                    },
                ]
            },
        ],
        copyright: 'Copyright © 2022 Craft Beer House. All Rights Reserved'
    }

    return (
        <>
            <div className='gold-line' />
            <footer className={footerClass}>
                <div className="wrapper">
                    <div className={`${footerClass}__top`}>
                        { content.columns?.map((column, index) => (
                            <div className={`${footerClass}__column`} key={ index }>
                                { column.subtitle && 
                                    <h3 className={`${footerClass}__subtitle`}>
                                        { column.subtitle }
                                    </h3>
                                }
                                { column.logo &&
                                    <Link href={'/'}>
                                        <a className={`${footerClass}__logo`}>
                                            <Image src={logo} alt='logo' />
                                        </a>
                                    </Link>
                                }
                                { column.text && 
                                    <p className={`${footerClass}__text`}>
                                        { column.text }
                                    </p>
                                }
                                { column.nav &&
                                    <ul className={`${footerClass}__nav`}>
                                        { column.nav?.map((link, index) => (
                                            <li key={ index }>
                                                <Link href={ link.link }>
                                                    <a>
                                                        { link.label }
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                }
                                { column.socials && 
                                    <div className={`${footerClass}__socials`}>
                                        { column.socials.map((socialItem, index) => (
                                            <a 
                                                className={`${footerClass}__social-btn`}
                                                href={ socialItem.link }
                                                key={ index }
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <FontAwesomeIcon icon={ socialItem.icon } />
                                            </a>
                                        ))}
                                    </div>
                                }
                                { column.info &&
                                    <div className={`${footerClass}__info`}>
                                        { column.info.map((infoItem, index) => (
                                            <div className={`${footerClass}__info-item`} key={ index }>
                                                <div className={`${footerClass}__info-item__icon`}>
                                                    <FontAwesomeIcon icon={ infoItem.icon } />
                                                </div>
                                                <p className={`${footerClass}__info-item__text`}>
                                                    { infoItem.text }
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div className={`${footerClass}__bottom`}>
                        <p className={`${footerClass}__copyright`}>
                            { content.copyright }
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer