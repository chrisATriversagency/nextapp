import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { colors } from '../utils/ThemeUtils';

const Button = styled.button`
    transition: transform .2s ease, box-shadow .2s ease;
    cursor: pointer;
    color: ${({ variant }) => {
        if (variant === 'white') {
            return colors.purple;
        } else {
            return colors.white;
        }
    }};
    background-color: ${({ variant }) => {
        if (variant === 'white') {
            return colors.white;
        } else {
            return colors[variant];
        }
    }};
    width: ${({ block }) => {
        if (block) {
            return '100%';
        } else {
            return 'auto';
        }
    }};
    box-shadow: ${colors.boxShadowButton};
    padding: 11px 23px;
    border-radius: 27px;
    font-weight: 800;
    font-size: 1.3rem;
    letter-spacing: .038em;
    line-height: 1.267;
    text-transform: uppercase;
    border: none;

    @media (min-width: $md) {
        font-size: 1.5rem;
        letter-spacing: .053em;
    }

    &:hover,
    &:focus {
        transform: translate(0, -8px);
        box-shadow: ${colors.boxShadowButtonHover};
    }
`;

Button.defaultProps = {
    variant: 'white',
    size: 'default',
    block: false,
    type: 'button'
};

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    href: PropTypes.string,
    type: PropTypes.oneOf(['button', 'reset', 'submit', null])
};

export default Button;
