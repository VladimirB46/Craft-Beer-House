import React from 'react'

const SectionTitle = ({ textTop, textBottom, darkText, centerText }) => {

    const bottomTextClass = darkText ? 'title text--dark' : 'title';

    const h2Class = centerText ? 'text--multiple-rows text--center' : 'text--multiple-rows';

    return (
        <h2 className={ h2Class }>
            { textTop && <span className='text--gold-dancing-script'>
                { textTop }
            </span>}
            { textBottom && <span className={ bottomTextClass }>
                { textBottom }
            </span>}
        </h2>
    )
}

export default SectionTitle