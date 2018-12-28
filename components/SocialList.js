import PropTypes from 'prop-types';

import SocialListItem from './SocialListItem';

const SocialList = props => (
    <ul>
        {props.links.map((link) => (
            <SocialListItem key={link.id} link={link.link} icon={link.icon} />
        ))}
    </ul>
);

SocialList.propTypes = {
    links: PropTypes.array
}

export default SocialList;
