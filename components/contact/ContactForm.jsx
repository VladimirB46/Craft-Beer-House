import React from 'react'
import MessageForm from '../MessageForm'
import SectionTitle from '../SectionTitle'

const ContactForm = () => {
    return (
        <section className='bg--grey-stripes ptb-70'>
            <div className="wrapper">
                <SectionTitle 
                    textTop={'Send us'}
                    textBottom={'a message'}
                    centerText={true}
                />
                <MessageForm />
            </div>
        </section>
        
    )
}

export default ContactForm