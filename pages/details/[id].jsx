import React from 'react';
import axios from 'axios';
import DetailsHero from '../../components/details/DetailsHero';
import SectionTitle from '../../components/SectionTitle';

import { useSelector, useDispatch } from 'react-redux';
import { getSavedItems, addToSaved, removeFromSaved } from '../../features/savedSlice';
import AddToCartBtn from '../../components/AddToCartBtn';

const Details = ({ item }) => {

    const detailsClass = 'details';

    const dispatch = useDispatch();

    const savedItems = useSelector(getSavedItems);

    const isSaved = item && savedItems.findIndex(elem => elem.id === item.id) >= 0;

    const handleSaveBtn = () => {
        if (isSaved) {
            dispatch(removeFromSaved(item))
        } else {
            dispatch(addToSaved(item))
        }
    }

    return (
        <>
            <DetailsHero />
            <section className='ptb-70 bg--light'>
                <div className="wrapper">
                    <SectionTitle 
                        textTop={'We present you the'}
                        textBottom={ item.name }
                        centerText={ true }
                        darkText={ true }
                    />
                    { item.tagline && <h3 className={`${detailsClass}-tagline`}>
                        {`"${item.tagline}"` }
                    </h3>}
                    <div className={'center-btns'}>
                        <button 
                            className='btn btn--secondary btn--small'
                            onClick={ handleSaveBtn }
                        >
                            { isSaved ? 'remove from saved' : 'save'}
                        </button>
                        <AddToCartBtn item={ item } />
                    </div>
                    <div className={detailsClass}>
                        <div className={`${detailsClass}__content`}>
                            { item.description && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Description:</h3>
                                <p className={`${detailsClass}__desc`}>
                                    { item.description }
                                </p>
                            </div>}
                            { item.first_brewed && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>First brewed:</h3>
                                <p>
                                    { item.first_brewed }
                                </p>
                            </div>}
                            { item.abv && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Alcohol percentage:</h3>
                                <p>
                                    {`${item.abv} %`}
                                </p>
                            </div>}
                            { item.brewers_tips && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Brewers Tips:</h3>
                                <p>
                                    { item.brewers_tips }
                                </p>
                            </div>}
                            { item.contributed_by && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Contributed by:</h3>
                                <p>
                                    { item.contributed_by }
                                </p>
                            </div>}
                            { item.boil_volume && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Boil volume:</h3>
                                <p>
                                    {`${item.boil_volume.value} ${item.boil_volume.unit}`}
                                </p>
                            </div>}
                            { item.food_pairing && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Best paired with:</h3>
                                <p>
                                    {item.food_pairing.join(', ')}
                                </p>
                            </div>}
                            { item.ingredients.hops && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Hops:</h3>
                                <ul>
                                    { item.ingredients.hops?.map((hop, index) => (
                                        <li key={index}>
                                            <p>
                                                {`${hop.name} (${hop.amount.value} ${hop.amount.unit}), added: ${hop.add}`}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                            { item.ingredients.malt && <div className={`${detailsClass}__row`}>
                                <h3 className={`${detailsClass}__subtitle`}>Malt:</h3>
                                <ul>
                                    { item.ingredients.malt?.map((malt, index) => (
                                        <li key={index}>
                                            <p>
                                                {`${malt.name} (${malt.amount.value} ${malt.amount.unit})`}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                        </div>
                        { item.image_url && <div className={`${detailsClass}__image`}>
                            <img src={ item.image_url} alt={ item.name } />
                        </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details

export const getServerSideProps = async (context) => {
    const query = context.query;

    const { id } = query;

    const res = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
    )

    const item = await res.data[0];

    return {
        props:{
            item,
        }
    }
}