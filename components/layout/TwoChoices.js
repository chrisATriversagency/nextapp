/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import TwoChoicesDivider from './TwoChoicesDivider';
import { breakpoints } from '../../utils/ThemeUtils';

const TwoChoices = (props) => (
    <div
        css={css`
            position: relative;

            @media (min-width: ${breakpoints.md}) {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
            }
        `}
    >
        <div>
            {props.leftChoice}
        </div>
        <TwoChoicesDivider />
        <div>
            {props.rightChoice}
        </div>
    </div>
)

export default TwoChoices;

TwoChoices.propTypes = {
    leftChoice: PropTypes.element,
    rightChoice: PropTypes.element
}
