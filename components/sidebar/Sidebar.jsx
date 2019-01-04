import styled from '@emotion/styled';
import React from 'react';

import SidebarClinicList from './SidebarClinicList';
import SidebarNavSection from './SidebarNavSection';
import User from './User';

import { colors } from '../../utils/ThemeUtils';

import sidebarNav from '../../static/data/sidebarNav';

const Aside = styled.aside`
    grid-area: sidebar;
    background-color: ${colors.white};
    box-shadow: ${colors.boxShadow};
`;

const Sidebar = () => (
    <Aside>
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
                        <User />
                        <SidebarClinicList clinicIds={['1', '2']} />
                    </div>
                </div>
                {sidebarNav.map(section => (
                    <SidebarNavSection
                        key={section.id}
                        title={section.title}
                        links={section.links}
                    />
                ))}
            </div>
        </div>
    </Aside>
);

export default Sidebar;
