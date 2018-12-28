/** @jsx jsx */
import { jsx } from '@emotion/core';
import PageWrapper from './PageWrapper';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './Footer';

const Layout = props => (
    <PageWrapper>
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
