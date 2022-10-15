import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.scss'

import { Provider } from 'react-redux';
import store from '../app/store';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MyApp({ Component, pageProps }) {
    return (
        <Provider store={ store }>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp