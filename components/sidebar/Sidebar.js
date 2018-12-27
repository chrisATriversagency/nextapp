import SidebarNavSection from './SidebarNavSection';
import User from './User';
import SidebarClinicList  from './SidebarClinicList';

import Link from 'next/link';

import sidebarNav from '../../data/sidebarNav';

const Sidebar = (props) => (
    <aside className="loggedin-sidebar">
        <div className="mobile-toggle">
            <i className="icon-hamburger"></i>
            <i className="icon-close"></i>
            <span className="mobile-toggle__text">Menu</span>
        </div>
        <div className="loggedin-sidebar__main">
            <header className="loggedin-sidebar__header">
                <h2 className="loggedin-sidebar__title">Comprehensive Medication Management</h2>
                <div className="loggedin-sidebar__subtitle">
                    Implementation System
                </div>
            </header>
            <div className="loggedin-sidebar__content">
                <div className="loggedin-sidebar__user-wrapper">
                    <User userName="Thomas Johnson" currentClinic="Hope Valley Medical" date="08/08/2018" />
                    <SidebarClinicList />
                </div>
                {sidebarNav.map((section) => (
                    <SidebarNavSection key={section.id} title={section.title} links={section.links} />
                ))}
            </div>
        </div>
    </aside>
);

export default Sidebar;
