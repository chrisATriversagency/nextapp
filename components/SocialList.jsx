import React from 'react';
import PropTypes from 'prop-types';

import SocialListItem from './SocialListItem';

const SocialList = ({ links }) => (
    <ul>
        {links.map(link => (<SocialListItem key={link.id} link={link.link} icon={link.icon} />))}
    </ul>
);

SocialList.propTypes = {
    links: PropTypes.instanceOf(Array).isRequired
};

export default SocialList;
