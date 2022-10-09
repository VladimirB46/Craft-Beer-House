import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../Modal';
import SavedItem from '../SavedItem';
import SectionTitle from '../SectionTitle';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector, useDispatch } from 'react-redux';
import { getSavedItems, setSavedItems } from '../../features/savedSlice';

const SavedItems = () => {

    const dispatch = useDispatch();

    const savedItems = useSelector(getSavedItems);

    const [ clearModalOpen, setClearModalOpen ] = useState(false);
    const [ modalSuccess, setModalSuccess ] = useState(false);

    const handleClear = () => {
        dispatch(setSavedItems([]));
        setModalSuccess(true);

        setTimeout(() => {
            setClearModalOpen(false);
        }, 2500);
        setTimeout(() => {
            setModalSuccess(false);
        }, 2800);
    }

    return (
        <>
            <section className='ptb-70 bg--light'>
                <div className="wrapper">
                    { savedItems && savedItems.length === 0 && <>
                        <SectionTitle 
                            textTop={'Your saved'}
                            textBottom={'list is empty'}
                            darkText={ true }
                            centerText={ true }
                        />
                        <div className='center-btns'>
                            <Link href={'/shop'}>
                                <a className='btn btn--primary btn--white-color'>
                                    add beer
                                </a>
                            </Link>
                        </div>
                    </>}
                    { savedItems && savedItems.length > 0 && <>
                        <SectionTitle 
                            textTop={'Your'}
                            textBottom={'saved list'}
                            darkText={ true }
                            centerText={ true }
                        />
                        <div className='center-btns'>
                            <button onClick={() => setClearModalOpen(true)} className='btn btn--red btn--small'>
                                clear list
                            </button>
                            <Link href={'/shop'}>
                                <a className='btn btn--primary btn--white-color btn--small'>
                                    add more
                                </a>
                            </Link>
                        </div>
                        <div className='saved-items-container'>
                            { savedItems?.map((item) => (
                                <SavedItem item={ item } key={ item.id } />
                            ))}
                        </div>
                    </>}
                </div>
            </section>

            <Modal open={ clearModalOpen } setOpen={ setClearModalOpen }>
                { !modalSuccess && <>
                    <div className='modal__x-icon' />
                    <h3 className='modal__title'>
                        Do you want to clear your saved list?
                    </h3>
                    <div className='modal__btns'>
                        <button onClick={() => setClearModalOpen(false)} className='btn btn--small btn--secondary'>
                            cancel
                        </button> 
                        <button onClick={ handleClear } className='btn btn--small btn--red'>
                            clear
                        </button> 
                    </div>
                </>}
                { modalSuccess && <>
                    <div className='modal__checkmark-icon'>
                        <FontAwesomeIcon icon={ faCheck } />
                    </div>
                    <h3 className='modal__title'>
                        Your Saved List has been cleared!
                    </h3>
                    <button onClick={() => setClearModalOpen(false)} className='btn btn--small btn--secondary'>
                        close
                    </button> 
                </>}
            </Modal>
        </>
    )
}

export default SavedItems