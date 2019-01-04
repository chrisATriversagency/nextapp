import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, breakpoints } from '../utils/ThemeUtils';
import { DefaultLinkStyle } from './Links';
import Icon from './Icon';

const Div = styled.div`
    color: ${({ isActive }) => {
        if (isActive) {
            return colors.white;
        } else {
            return colors.black;
        }
    }};
    background-color: ${({ isActive }) => {
        if (isActive) {
            return colors.purple;
        } else {
            return colors.white;
        }
    }};
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    border: 1px solid ${colors.borderGrey};
    padding: 20px 20px 30px;
    width: 100%;

    @media (min-width: ${breakpoints.lg}) {
        padding: 40px;
    }

    &:hover,
    &:focus {
        background-color: ${colors.purple};
        color: ${colors.white};
    }
`;

const Choice = ({ isActive }) => (
    <Div>
        <Icon icon="checkmark" />
        <div>Implementation</div>
        <p>
            For those who are implementing CMM for the first time (initial implementation of CMM).
        </p>
        <DefaultLinkStyle>{isActive ? 'Path Selected' : 'Select this path'}</DefaultLinkStyle>
    </Div>
);

Choice.defaultProps = {
    isActive: false
};

Choice.propTypes = {
    isActive: PropTypes.bool
};

export default Choice;
