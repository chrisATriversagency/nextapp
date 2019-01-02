/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { LinkTwoWhite } from './Links';
import { colors } from '../utils/ThemeUtils';

const Header = () => (
    <header
        css={css`
            grid-area: header;
            background-image: ${colors.headerGradient};
            padding: 30px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
        `}
    >
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
    </header>
)

export default Header;
