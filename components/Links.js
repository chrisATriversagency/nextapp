import styled from '@emotion/styled';
import { colors, breakpoints } from '../utils/ThemeUtils';

export const DefaultLinkStyle = styled.span`
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: .07em;
    line-height: 1.28;
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
