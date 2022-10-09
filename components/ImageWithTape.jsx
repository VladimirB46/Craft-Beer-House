import Image from 'next/image'
import React from 'react'


const ImageWithTape = ({ image }) => {
    return (
        <div className='image--white-border'>
            <Image
                src={ image }
                alt=''
            />
        </div>
    )
}

export default ImageWithTape