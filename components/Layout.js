import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './Footer';

const Layout = props => (
    <div>
        <Sidebar />
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
)

export default Layout
