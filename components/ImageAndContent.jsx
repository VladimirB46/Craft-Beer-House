import React from 'react'
import Image from 'next/image'
import ImageWithTape from './ImageWithTape';

const ImageAndContent = ({ image, children, contentLeft, darkText }) => {

    const containerClass = contentLeft ? 'content-2-parts content-2-parts--content-left' : 'content-2-parts';

    const textContainerClass = darkText ? 'text-container text--dark' : 'text-container'

    return (
        <div className={ containerClass }>
            { image && <div className='image-container'>
                <ImageWithTape image={ image } />
            </div>}
            <div className={ textContainerClass }>
                { children }
            </div>
        </div>
    )
}

export default ImageAndContent