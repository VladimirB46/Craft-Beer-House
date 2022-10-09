import React from 'react'
import { faMapLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard';
import SectionTitle from '../SectionTitle';

const ContactInfo = () => {

    const info = [
        {
            icon: faEnvelope,
            title: 'mail here',
            text: [
                'email@gmail.com',
                'info@gmail.com'
            ]
        },
        {
            icon: faMapLocation,
            title: 'visit here',
            text: [
                '94 River Road, London',
                'United Kingdom'
            ]
        },
        {
            icon: faPhone,
            title: 'call here',
            text: [
                '+132 456789',
                '+987 654321'
            ]
        },
    ]

    return (
        <section className='ptb-70 bg--light'>
            <div className="wrapper">
                <SectionTitle 
                    textTop={'Here is'}
                    textBottom={'our info'}
                    centerText={true}
                    darkText={true}
                />
                <div className='info-cards-container'>
                    { info?.map((infoItem, index) => (
                        <InfoCard info={ infoItem} key={ index } />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactInfo