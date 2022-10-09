import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const ItemPreviewCard = ({ item }) => {

    const cardClass = 'item-preview-card';

    return (
        <div className={cardClass}>
            <Link href={`/details/${item.id}`}>
                <a className={`${cardClass}__image`}>
                    <img src={ item.image_url } alt={ item.name } layout='fill' />
                </a>
            </Link>
            <Link href={`/details/${item.id}`}>
                <a>
                    <h3 className={`${cardClass}__name`}>
                        { item.name }
                    </h3>
                </a>
            </Link>
        </div>
    )
}

export default ItemPreviewCard