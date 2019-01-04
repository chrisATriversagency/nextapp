import React from 'react';
import PropTypes from 'prop-types';

const ContainerBoxContent = ({ children }) => (
    <div>
        {children}
    </div>
);

ContainerBoxContent.propTypes = {
    children: PropTypes.node.isRequired
};

export default ContainerBoxContent;
