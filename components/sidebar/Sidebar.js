/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

import SidebarNavSection from './SidebarNavSection';
import User from './User';
import SidebarClinicList  from './SidebarClinicList';
import { colors } from '../../utils/ThemeUtils';
import UserContext from '../../context/UserContext';

import sidebarNav from '../../data/sidebarNav';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.updateActiveClinic = (id) => {
            this.setState(prevState => ({
                activeClinic: id
            }));
        }

        this.state = {
            userName: 'Thomas Johnson',
            clinicIds: [4, 5],
            activeClinic: 1,
            updateActiveClinic: this.updateActiveClinic
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <aside
                    css={css`
                        grid-area: sidebar;
                        background-color: ${colors.white};
                        box-shadow: ${colors.boxShadow};
                    `}
                >
                    <div className="mobile-toggle">
                        <i className="icon-hamburger"></i>
                        <i className="icon-close"></i>
                        <span className="mobile-toggle__text">Menu</span>
                    </div>
                    <div>
                        <header>
                            <h2>Comprehensive Medication Management</h2>
                            <div>
                                Implementation System
                            </div>
                        </header>
                        <div>
                            <div>
                                <UserContext.Consumer>
                                    {({userName, clinicIds, activeClinic}) => (
                                        <div>
                                            <User userName={userName} currentClinic={activeClinic} />
                                            <SidebarClinicList clinicIds={clinicIds} />
                                        </div>
                                    )}
                                </UserContext.Consumer>
                            </div>
                            {sidebarNav.map((section) => (
                                <SidebarNavSection key={section.id} title={section.title} links={section.links} />
                            ))}
                        </div>
                    </div>
                </aside>
            </UserContext.Provider>
        );
    }
}

export default Sidebar;
