import React from 'react';
import PropTypes from 'prop-types';

import SidebarLink from './SidebarLink';

const SidebarNavSection = ({ title, links }) => (
    <div>
        <h3>{title}</h3>
        <ul>
            {links.map(({ href, id, text }) => (
                <SidebarLink key={id} {...{ href, text }} />
            ))}
        </ul>
    </div>
);

SidebarNavSection.defaultProps = {
    title: '',
    links: []
};

SidebarNavSection.propTypes = {
    title: PropTypes.string,
    links: PropTypes.instanceOf(Array)
};

export default SidebarNavSection;
