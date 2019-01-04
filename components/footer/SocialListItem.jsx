import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../utils/ThemeUtils';

import Icon from '../Icon';

const Item = styled.li`
    padding: 0 12px;
`;

const SocialListItem = ({
    link,
    icon
}) => (
    <Item>
        <a href={link}>
            <Icon icon={icon} size="2.2rem" color={colors.footerGrey} />
        </a>
    </Item>
);

SocialListItem.defaultProps = {
    icon: '',
    link: ''
};

SocialListItem.propTypes = {
    icon: PropTypes.string,
    link: PropTypes.string
};

export default SocialListItem;
