/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import SidebarClinicList from './SidebarClinicList';
import SidebarNavSection from './SidebarNavSection';
import User from './User';

import { colors } from '../../utils/ThemeUtils';

import sidebarNav from '../../data/sidebarNav';


class Sidebar extends React.Component {
    // async componentWillMount() {
    //     const menu = await Api.fetchMenu();
    //
    //     this.setState(() => {
    //         menu
    //     });
    // }
    //
    render() {
        return (
            <aside
                css={css`
                    grid-area: sidebar;
                    background-color: ${colors.white};
                    box-shadow: ${colors.boxShadow};
                `}
            >
                <div className="mobile-toggle">
                    <i className="icon-hamburger" />
                    <i className="icon-close" />
                    <span className="mobile-toggle__text">Menu</span>
                </div>
                <div>
                    <header>
                        <h2>Comprehensive Medication Management</h2>
                        <div>
                            {'Implementation System'}
                        </div>
                    </header>
                    <div>
                        <div>
                            <div>
                                <User userName={userName} currentClinic={activeClinic} />
                                <SidebarClinicList clinicIds={clinicIds} />
                            </div>
                        </div>
                        {sidebarNav.map((section) => (
                            <SidebarNavSection key={section.id} title={section.title} links={section.links} />
                        ))}
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;
