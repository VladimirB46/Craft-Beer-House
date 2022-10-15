import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactSocials from '../components/contact/ContactSocials'

const Contact = () => {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactSocials />
        </>
    )
}

export default Contact