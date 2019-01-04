import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../utils/ThemeUtils';

const Header = styled.header`
    background-image: ${colors.headerGradient};
    text-align: center;
    color: ${colors.white};
`;

const ContainerBoxHeader = ({
    subTitle,
    title,
    copy,
    note
}) => (
    <Header>
        {subTitle && <div>{subTitle}</div>}
        {title && <h1>{title}</h1>}
        {copy && <p>{copy}</p>}
        {note && <p>{note}</p>}
    </Header>
);

ContainerBoxHeader.defaultProps = {
    title: '',
    subTitle: '',
    copy: '',
    note: ''
};

ContainerBoxHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    copy: PropTypes.string,
    note: PropTypes.string
};

export default ContainerBoxHeader;
