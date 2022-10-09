import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import DetailsHero from '../../components/details/DetailsHero';
import SectionTitle from '../../components/SectionTitle';
import Spinner from '../../components/Spinner';

import { useSelector, useDispatch } from 'react-redux';
import { getSavedItems, addToSaved, removeFromSaved } from '../../features/savedSlice';
import AddToCartBtn from '../../components/AddToCartBtn';

const Details = () => {

    const detailsClass = 'details';

    const router = useRouter();

    const { id } = router.query;

    const [ item, setItem ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        setIsLoading(true);
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then((response) => {
                setItem(response.data[0]);
            })
            .catch(error => {
                setError(error);
            })
            .then(() => {
                setIsLoading(false);
            })
    }, [router.isReady])

    const dispatch = useDispatch();

    const savedItems = useSelector(getSavedItems);

    const isSaved = item && savedItems.findIndex(elem => elem.id === item.id) < 0 ? false : true;

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
                    { item && <>
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
                    </>}
                    { isLoading && <Spinner centered={true} />} 
                    { error && <SectionTitle textBottom={'an error occured'} centerText={true} darkText={true} />}
                </div>
            </section>
        </>
    )
}

export default Details