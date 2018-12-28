import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { colors } from '../utils/ThemeUtils';

const Button = styled.button`
    transition: transform .2s ease, box-shadow .2s ease;
    cursor: pointer;
    color: ${props => props.variant === 'white' ? colors.purple : colors.white};
    background-color: ${props => props.variant === 'white' ? colors.white : colors[props.variant]};
    width: ${props => props.block ? '100%' : 'auto'};
    box-shadow: ${colors.boxShadowButton};
    padding: 11px 23px;
    border-radius: 27px;
    font-weight: 800;
    font-size: 1.3rem;
    letter-spacing: .038em;
    line-height: 1.267;
    text-transform: uppercase;

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

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    href: PropTypes.string,
    type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
};

Button.defaultProps = {
    variant: 'white',
    size: 'default',
    block: false,
    type: 'button',
};

export default Button;
