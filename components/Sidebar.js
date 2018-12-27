import SidebarNavSection from './SidebarNavSection';
import Link from 'next/link';
import sidebarNav from '../data/sidebarNav';

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
                    <div className="sidebar-user">
                        <i className="sidebar-user__icon icon-profile"></i>
                        <div className="sidebar-user__info">
                            <div className="sidebar-user__name">
                                Thomas Johnson
                            </div>
                            <div className="sidebar-user__clinic">
                                Hope Valley Medical
                            </div>
                            <div className="sidebar-user__date">
                                08/08/2018
                            </div>
                        </div>
                    </div>
                    <div className="text--center sidebar-user__action">
                        <button className="button button--purple button--small js-clinic-toggle" type="button" name="button">
                            Change Clinic
                            <i className="icon-arrow-down button__icon"></i>
                        </button>
                        <div className="tooltip">
                            <div className="tooltip__svg">
                            </div>
                            <div className="tooltip__header">
                                <div className="tooltip__title">
                                    Quick Tip
                                </div>
                                <i className="icon-close tooltip__close"></i>
                            </div>
                            <div className="tooltip__content">
                                <p className="tooltip__copy body--small">
                                    Use this dropdown to select the clinic you would like to continue working on in System Overview.
                                </p>
                                <p className="tooltip__copy body--small">
                                    <strong>Note:</strong> Your progress in System Overview will only apply to the individual clinic you are currently on.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ul className="clinic-list unstyled-list">
                        <li className="clinic-list__item">
                            <a className="clinic-list__link clinic-list__link--active" href="#">
                                <span className="clinic-list__text">Hope Valley Medical</span>
                                <i className="icon icon-checkmark clinic-list__icon clinic-list__icon--active"></i>
                            </a>
                        </li>
                        <li className="clinic-list__item">
                            <a className="clinic-list__link" href="#">
                                <span className="clinic-list__text">St. Joseph Memorial Hospital</span>
                                <i className="icon icon-checkmark clinic-list__icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                {sidebarNav.map((section) => (
                    <SidebarNavSection title={section.title} links={section.links} />
                ))}
                <ul className="unstyled-list loggedin-header-list">
                    <li className="loggedin-header-list__item">
                        <a className="menu-link menu-link--white" href="#">
                            <i className="menu-link__icon icon-arrow-top-right"></i>
                            <span className="menu-link__text" data-title="Main Site">Main Site</span>
                        </a>
                    </li>
                    <li className="loggedin-header-list__item">
                        <a className="menu-link menu-link--white" href="#">
                            <i className="menu-link__icon icon-search"></i>
                            <span className="menu-link__text" data-title="Search">Search</span>
                        </a>
                    </li>
                    <li className="loggedin-header-list__item">
                        <a className="menu-link menu-link--white" href="#">
                            <i className="menu-link__icon icon-logout"></i>
                            <span className="menu-link__text" data-title="Log Out">Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
);

export default Sidebar;
