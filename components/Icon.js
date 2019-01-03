import PropTypes from 'prop-types';
import IcomoonReact from 'icomoon-react';
import { colors } from '../utils/ThemeUtils';

import iconSet from '../static/font/selection.json';

const Icon = ({ color, size, icon }) => (
    <IcomoonReact {...{ iconSet, color, size, icon }} />
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  size: '16',
  color: colors.black
};

export default Icon;
