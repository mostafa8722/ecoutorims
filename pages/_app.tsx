
import React from "react";
import App from "next/app";
import 'bootstrap/dist/css/bootstrap.css'
import DefaultLayout from "../containers/DefaultLayout";

import 'react-toastify/dist/ReactToastify.css';
import "../public/css/reset.css";
import "../public/css/style.css";
//import "../public/css/slidercss/style.css";


import {Provider} from 'react-redux';

import withRedux from "next-redux-wrapper";
import {store} from '../logic/stores';


class customApp extends App {

    render(props) {
        const {Component, pageProps, router} = this.props;

        const Layout = Component.Layout || DefaultLayout;





        return (
            <>

                <Provider store={store}>
                    <Layout {...pageProps}>
                        <Component routes={router.query} {...pageProps} />
                    </Layout>
                </Provider>


            </>
        );
    }
}
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(customApp);
