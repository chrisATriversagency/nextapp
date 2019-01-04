import React from 'react';
import PropTypes from 'prop-types';

import UnstyledList from '../UnstyledList';

import SidebarLink from './SidebarLink';

const SidebarNavSection = ({ title, links }) => (
    <div>
        <h3>{title}</h3>
        <UnstyledList>
            {links.map(({ href, id, text }) => (
                <SidebarLink key={id} {...{ href, text }} />
            ))}
        </UnstyledList>
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
