import PropTypes from 'prop-types';
import IcomoonReact from 'icomoon-react';

import iconSet from '../static/font/selection.json';

const Icon = props => (
    <IcomoonReact iconSet={iconSet} color={props.color} size={props.size} icon={props.icon} />
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  color: '#f00',
  size: '16',
};

export default Icon;
