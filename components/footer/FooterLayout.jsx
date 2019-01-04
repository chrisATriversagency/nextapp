import styled from '@emotion/styled';

import { breakpoints, colors } from '../../utils/ThemeUtils';

export const FooterElement = styled.footer`
    gridArea: 'footer';
    padding: 0 15px;

    @media (min-width: ${breakpoints.md}) {
        padding: 0 35px;
    }
`;

export const FooterTop = styled.div`
    position: relative;

    @media (min-width: $lg) {
        padding: 40px 0;
    }
`;

export const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 35px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.footerGrey};
    border-top: 1px solid ${colors.borderGrey};
    text-align: center;

    @media (min-width: ${breakpoints.md}) {
        flex-direction: row;
    }
`;

export const FooterBottomItem = styled.div`
    padding: 0 17.5px;

    @media (max-width: ${breakpoints.mdMax}) {
        &:not(:last-of-type) {
            padding-bottom: 25px;
        }
    }
`;
