import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SocialListItem from './SocialListItem';
import UnstyledList from '../UnstyledList';

const List = styled(UnstyledList)`
    display: flex;
    color: $footer-grey;
`;


const SocialList = ({ links }) => (
    <List>
        {links.map(link => (<SocialListItem key={link.id} link={link.link} icon={link.icon} />))}
    </List>
);

SocialList.propTypes = {
    links: PropTypes.instanceOf(Array).isRequired
};

export default SocialList;
