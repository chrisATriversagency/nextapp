import PropTypes from 'prop-types';
import React from 'react';

const SidebarClinic = ({ name }) => (
    <li>
        <button type="button">
            <span>{name}</span>
        </button>
    </li>
);

SidebarClinic.propTypes = {
    name: PropTypes.string.isRequired
};

export default SidebarClinic;
