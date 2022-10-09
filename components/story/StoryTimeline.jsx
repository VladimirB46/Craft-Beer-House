import React from 'react'
import SectionTitle from '../SectionTitle';
import ImageBg from '../ImageBg';

import beerBottles from '../../public/images/beer-bottles-2.jpg';
import Timeline from '../Timeline';

import cheerImg from '../../public/images/cheer.jpg';
import mugImg from '../../public/images/mug-1.jpg';
import factoryImg from '../../public/images/factory-1.jpg';
import warehouseImg from '../../public/images/warehouse-1.jpg';
import customersOneImg from '../../public/images/customers-1.jpg';
import oktoberfestImg from '../../public/images/oktoberfest-1.jpg';
import customersTwoImg from '../../public/images/customers-2.jpg';
import beerPackImg from '../../public/images/beer-pack-1.jpg';

const StoryTimeline = () => {

    const sections = [
        {
            year: '1956',
            date: '26 december',
            title: 'a beer that started it all',
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam recusandae nam neque asperiores, alias iure nesciunt.',
            ],
            image: cheerImg,
        },
        {
            year: '1957',
            date: '13 april',
            title: 'our first beer',
            text: [
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis at aut illo vero ullam.',
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis at aut illo vero ullam.',
            ],
            image: mugImg,
        },
        {
            year: '1967',
            date: '12 june',
            title: 'our first factory',
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam recusandae nam neque asperiores, alias iure nesciunt.',
            ],
            image: factoryImg,
        },
        {
            year: '1973',
            date: '18 september',
            title: 'our first warehouse',
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam recusandae nam neque asperiores, alias iure nesciunt.',
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis at aut illo vero ullam.',
            ],
            image: warehouseImg,
        },
        {
            year: '1985',
            date: '27 march',
            title: 'our 100th customer',
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam recusandae nam neque asperiores, alias iure nesciunt.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ],
            image: customersOneImg,
        },
        {
            year: '1997',
            date: '18 september',
            title: 'our first octoberfest',
            text: [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod atque incidunt vel doloribus hic quae soluta asperiores doloremque rem, similique omnis amet? Sunt omnis architecto quo, nulla sapiente atque magni?',
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis at aut illo vero ullam.',
            ],
            image: oktoberfestImg,
        },
        {
            year: '2017',
            date: '13 april',
            title: '60 years of craft beer house',
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam recusandae nam neque asperiores, alias iure nesciunt.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ],
            image: beerPackImg,
        },
        {
            year: '2021',
            date: '07 november',
            title: '20 000 happy clients',
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam recusandae nam neque asperiores, alias iure nesciunt.',
            ],
            image: customersTwoImg,
        },
    ]

    return (
        <section className='ptb-70'>
            <ImageBg
                image={ beerBottles }
                transparentImg={true}
                imgPositionTop={true}
            />
            <div className="wrapper">
                <SectionTitle 
                    textTop={'Our'}
                    textBottom={'history'}
                    centerText={true}
                />
                <Timeline sections={ sections } />
            </div>
        </section>
    )
}

export default StoryTimeline