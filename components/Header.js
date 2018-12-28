/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
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
          <a>Main Site</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/logout">
          <a>Log Out</a>
        </Link>
    </header>
)

export default Header;
