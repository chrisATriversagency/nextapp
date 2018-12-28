import PropTypes from 'prop-types';

const SocialListItem = props => (
    <li>
        <a href={props.link}>
            <i>{props.icon}</i>
        </a>
    </li>
);

SocialListItem.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string
};

export default SocialListItem;
