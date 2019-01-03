import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import TwoChoicesDivider from './TwoChoicesDivider';
import { breakpoints } from '../../utils/ThemeUtils';

const Div = styled.div`
    position: relative;

    @media (min-width: ${breakpoints.md}) {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
    }
`;

const TwoChoices = ({ leftChoice, rightChoice }) => (
    <Div>
        <div>
            {leftChoice}
        </div>
        <TwoChoicesDivider />
        <div>
            {rightChoice}
        </div>
    </Div>
);

TwoChoices.defaultProps = {
    leftChoice: <div />,
    rightChoice: <div />
};

TwoChoices.propTypes = {
    leftChoice: PropTypes.element,
    rightChoice: PropTypes.element
};

export default TwoChoices;
