import React from 'react'
import Image from 'next/image';

const ImageBg = ({ image, lightBg, transparentImg, imgPositionTop }) => {

    let imgClass = '';
    if (transparentImg) imgClass += ' transparent';
    if (imgPositionTop) imgClass += ' position--top';

    return (
        <div className="background">
            <div className={lightBg ? 'fallback-light' : 'fallback-dark'} />
            <Image
                layout='fill'
                src={ image }
                alt=''
                className={ imgClass }
            />
        </div>
    )
}

export default ImageBg