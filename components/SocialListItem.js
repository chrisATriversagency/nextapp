import PropTypes from 'prop-types';

import Icon from './Icon';

const SocialListItem = props => (
    <li>
        <a href={props.link}>
            <Icon icon={props.icon} />
        </a>
    </li>
);

SocialListItem.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string
};

export default SocialListItem;
