import React, { useEffect } from 'react'

const MessageForm = () => {

    return (
        <div className='form'>
            <div className='form__row form__row--2-parts'>
                <input 
                    type={'text'}
                    placeholder='Name'
                    className='input input--light'
                />
                <input 
                    type={'email'}
                    placeholder='Email'
                    className='input input--light'
                />
            </div>
            <div className='form__row form__row--2-parts'>
                <input 
                    type={'tel'}
                    placeholder='Phone number'
                    className='input input--light'
                />
                <input 
                    type={'text'}
                    placeholder='Subject'
                    className='input input--light'
                />
            </div>
            <div className='form__row'>
                <textarea 
                    className='input input--light'
                    placeholder='Message'
                />
            </div>
            <button className='btn btn--primary'>
                send message
            </button>
        </div>
    )
}

export default MessageForm