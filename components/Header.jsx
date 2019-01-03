import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import { LinkTwoWhite } from './Links';
import { colors } from '../utils/ThemeUtils';

const HeaderElement = styled.header`
    grid-area: header;
    background-image: ${colors.headerGradient};
    padding: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const Header = () => (
    <HeaderElement>
        <Link href="/">
            <LinkTwoWhite>
                Main Site
            </LinkTwoWhite>
        </Link>
        <Link href="/search">
            <LinkTwoWhite>
                Search
            </LinkTwoWhite>
        </Link>
        <Link href="/logout">
            <LinkTwoWhite>
                Log Out
            </LinkTwoWhite>
        </Link>
    </HeaderElement>
);

export default Header;
