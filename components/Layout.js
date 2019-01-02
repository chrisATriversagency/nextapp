/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import Head from 'next/head';
import PageWrapper from './PageWrapper';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './Footer';

import { fonts, colors } from '../utils/ThemeUtils.js';

const Layout = props => (
    <PageWrapper>
        <Head>
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,700,800,900" rel="stylesheet" />
        </Head>
        <Global
            styles={css`
                * {
                    font-family: inherit;
                    line-height: inherit;
                    color: inherit;
                    box-sizing: border-box;

                    &::after,
                    &::before {
                        box-sizing: border-box
                    }
                }
                html {
                    font-size: 10px;
                    height: 100%;
                }
                body {
                    font-family: ${fonts.primary};
                    font-size: 1.6rem;
                    line-height: 1.625;
                    font-weight: 300;
                    letter-spacing: 0;
                    color: ${colors.black};
                    margin: 0;
                    height: 100%;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                #__next {
                    height: 100%;
                }
            `}
        />
        <Sidebar />
        <Header />
        <main
            css={{
                gridArea: 'content'
            }}
        >
            {props.children}
        </main>
        <Footer />
    </PageWrapper>
)

export default Layout
