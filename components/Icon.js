import PropTypes from 'prop-types';
import iconPaths from '../static/font/icons'

function getPath(iconName) {
    const icon = iconPaths.icons.find(function(icon) {
        return icon.tags[0] === iconName;
    });

    if (icon) {
        return icon.paths.join(' ');
    } else {
        console.warn(`icon ${iconName} does not exist.`);
        return '';
    }
}

const Icon = props => (
    <svg>
        <path d={getPath(props.icon)}></path>
    </svg>
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default Icon;
