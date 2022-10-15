import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import unavailable from '../public/images/unavailable.png';

import { useDispatch } from 'react-redux';
import { removeFromSaved, editNotes } from '../features/savedSlice';
import Modal from './Modal';

const SavedItem = ({ item }) => {

    const dispatch = useDispatch();
    
    const [ removed, setRemoved ] = useState(false);
    
    const itemClass = 'saved-item';
    const containerClass = !removed ? 'saved-item' : 'saved-item--disappear saved-item';

    const handleRemove = () => {
        setRemoved(true);
        setTimeout(() => {
            dispatch(removeFromSaved(item));
        }, 700);
    }

    const [ editModalOpen, setEditModalOpen ] = useState(false);
    const [ notesInputValue, setNotesInputValue ] = useState('');

    const handleOpenEditModal = () => {
        setEditModalOpen(true);
        setNotesInputValue(item.notes);
    }

    const handleSaveNotes = () => {
        dispatch(editNotes({
            item: item,
            note: notesInputValue,
        }));
        setEditModalOpen(false);
    }

    return (
        <>
            <div className={containerClass}>
                <button onClick={ handleRemove } className={`${itemClass}__remove-btn`} />
                <div className={`${itemClass}__image`}>
                    <Image 
                        src={ item.image_url ? item.image_url : unavailable } 
                        alt={ item.name } 
                        layout='fill' 
                    />
                </div>
                <div className={`${itemClass}__content`}>
                    <Link href={`/details/${item.id}`}>
                        <a>
                            <h3 className={`${itemClass}__name`}>
                                { item.name }
                            </h3>
                        </a>
                    </Link>
                    <div className='center-btns'>
                        <Link href={`/details/${item.id}`}>
                            <a className='btn btn--secondary btn--small'>details</a>
                        </Link>
                        <button onClick={ handleOpenEditModal } className='btn btn--primary btn--white-color btn--small'>
                            notes
                        </button>
                    </div>
                </div>
            </div>

            <Modal open={ editModalOpen } setOpen={ setEditModalOpen }>
                <div className='modal__con'>

                </div>
                <h3 className='modal__title'>
                    {`Edit notes for "${item.name}"`}
                </h3>
                <div className='modal__edit'>
                    <textarea 
                        placeholder='Add Note'
                        value={ notesInputValue }
                        onChange={(e) => setNotesInputValue(e.currentTarget.value)}
                        spellCheck={false}
                    />
                </div>
                <div className='modal__btns'>
                    <button onClick={() => setEditModalOpen(false)} className='btn btn--small btn--secondary'>
                        cancel
                    </button>
                    <button onClick={ handleSaveNotes } className='btn btn--small btn--primary btn--white-color'>
                        save
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default SavedItem