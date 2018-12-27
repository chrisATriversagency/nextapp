import Header from './Header';
import Sidebar from './Sidebar';

const Layout = props => (
    <div>
        <Sidebar />
        <Header />
        {props.children}
    </div>
)

export default Layout
