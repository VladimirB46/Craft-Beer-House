import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialCard from '../SocialCard';
import SectionTitle from '../SectionTitle';

const ContactSocials = () => {

    const socials = [
        {
            icon: faFacebookF,
            title: 'facebook',
            link: '/',
            text: 'Like our Facebook page for awesome deals and new arrivals.',
        },
        {
            icon: faInstagram,
            title: 'instagram',
            link: '/',
            text: 'Hashtag #craftbeerhouse to get a change to get free goodies.',
        },
        {
            icon: faTwitter,
            title: 'twitter',
            link: '/',
            text: 'Follow us on Twitter for all the latest news incraft beer brewing.',
        },
    ]

    return (
        <section className='ptb-70 bg--light'>
            <div className="wrapper">
                <SectionTitle 
                    textTop={'Check out'}
                    textBottom={'our socials'}
                    centerText={true}
                    darkText={true}
                />
                <div className='social-cards-container'>
                    { socials?.map((socialItem, index) => (
                        <SocialCard socialItem={socialItem} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactSocials