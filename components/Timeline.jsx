import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import logo from '../public/images/logo.png';
import TimelineSection from './TimelineSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwn, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Timeline = ({ sections }) => {

    const timelineClass = 'timeline';
    
    const [ loadLevel, setLoadLevel ] = useState(0);
    const [ containerHeight, setContainerHeight ] = useState(0);
    const [ completed, setCompleted ] = useState(false);

    const handleLoadMore = () => {
        const sections = document.querySelectorAll('.timeline__section');
        if (sections.length === loadLevel) return;

        const oldLoadLevel = loadLevel;
        const newLoadLevel = oldLoadLevel;

        const oldContainerHeight = containerHeight;
        const newContainerHeight = oldContainerHeight;

        if (sections[oldLoadLevel]) {
            newLoadLevel += 1;

            const sectHeight = sections[loadLevel].clientHeight;
            newContainerHeight += sectHeight;
        }

        if (sections[oldLoadLevel + 1]) {
            newLoadLevel += 1;

            const sectHeight = sections[loadLevel + 1].clientHeight;
            newContainerHeight += sectHeight
        }

        setLoadLevel(newLoadLevel);
        setContainerHeight(newContainerHeight);
    }

    useEffect(() => {
        handleLoadMore();
    }, [])

    useEffect(() => {
        if (sections.length === loadLevel) setCompleted(true);
    }, [loadLevel])

    return (
        <div className={timelineClass}>
            <div className={`${timelineClass}__logo`}>
                <Image src={logo} alt='logo' />
            </div>
            <div className={`${timelineClass}__start-line`} />
            <div className={`${timelineClass}__sections-container`} style={{maxHeight: containerHeight}}>
                { sections?.map((section, index) => (
                    <TimelineSection section={ section } key={ index } />
                ))}
            </div>
            <div className={`${timelineClass}__end-line`} />
            { !completed && <button className='btn btn--outline-gold' onClick={ handleLoadMore }>
                load more
            </button>}
            { completed && <h3 className={`${timelineClass}__completed-subtitle`}>
                <FontAwesomeIcon icon={ faWheatAwn } />
                Present
                <FontAwesomeIcon icon={ faWheatAwn } />
            </h3>}
        </div>
    )
}

export default Timeline