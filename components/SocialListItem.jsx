import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

const SocialListItem = ({
    link,
    icon
}) => (
    <li>
        <a href={link}>
            <Icon icon={icon} />
        </a>
    </li>
);

SocialListItem.defaultProps = {
    link: '',
    icon: ''
};

SocialListItem.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string
};

export default SocialListItem;
