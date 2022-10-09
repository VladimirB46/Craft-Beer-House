import React from 'react'

const Spinner = ({ small, light, centered}) => {

    var spinnerClass = 'spinner';
    if (small) spinnerClass += ' spinner--small';
    if (light) spinnerClass += ' spinner --light';
    if (centered) spinnerClass += ' spinner--centered';

    return (
        <div className={ spinnerClass } />
    )
}

export default Spinner