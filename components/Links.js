/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../utils/ThemeUtils';

export const link1 = css`
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: .07em;
    line-height: 1.28;

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1.5rem;
    }
`;

export const link1b = css`
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: .07em;
    line-height: 1.28;
    color: ${colors.darkGrey};
`;

export const link2 = css`
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: .038em;
    line-height: 1.54;
`;

export const DefaultLinkStyle = styled.a`
    ${link1};

    border-bottom: 2px solid ${colors.orange};
    cursor: pointer;

    &:hover,
    &:focus {
        color: ${colors.orange};
    }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1.5rem;
    }
`
export const SecondaryLinkStyle = styled.a`
    ${link1b};

    color: ${({ color }) => color ? color : colors.black};

    &:hover,
    &:focus {
        color: ${colors.purple};
    }
`;

export const LinkTwoWhite = styled.a`
    ${link2};

    color: ${colors.white};
    text-transform: uppercase;
`;
