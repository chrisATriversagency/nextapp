import Link from 'next/link'

const Header = () => (
    <header>
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

export default Header
