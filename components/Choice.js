/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { colors, breakpoints } from '../utils/ThemeUtils';
import { DefaultLinkStyle } from './Links';
import Icon from './Icon';

const Choice = (props) => (
    <div
        css={css`
            color: ${props.isActive ? colors.white : colors.$black};
            background-color: ${props.isActive ? colors.purple : colors.white};
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
        `}
    >
        <Icon icon="checkmark" />
        <div>Implementation</div>
        <p>For those who are implementing CMM for the first time (initial implementation of CMM).</p>
        <DefaultLinkStyle>{props.isActive ? 'Path Selected' : 'Select this path'}</DefaultLinkStyle>
    </div>
)

export default Choice;

Choice.propTypes = {
    isActive: PropTypes.bool
}

Choice.defaultProps = {
    isActive: false
}
