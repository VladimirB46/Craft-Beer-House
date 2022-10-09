import React from 'react'
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

const HeaderNav = ({ navOpen, setNavOpen }) => {

    const router = useRouter();

    const navLinks = [
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

    return (
        <nav className={ navOpen ? 'header__nav nav-open' : 'header__nav'}>
            <ul>
                { navLinks?.map((link, index) => (
                    <li key={ index }>
                        <Link href={link.link}>
                            <a 
                                className={ router.asPath == link.link ? 'nav-active' : '' }
                                onClick={() => setNavOpen(false)}
                            >
                                { link.label }
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default HeaderNav