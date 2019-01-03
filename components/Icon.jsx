import IcomoonReact from 'icomoon-react';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../utils/ThemeUtils';

import iconSet from '../static/font/selection.json';

const Icon = ({ color, size, icon }) => (
    <IcomoonReact {...{
        iconSet,
        color,
        size,
        icon
    }}
    />
);

Icon.defaultProps = {
    size: '16',
    color: colors.black
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Icon;
