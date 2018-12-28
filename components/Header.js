import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
          <a>Main Site</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/logout">
          <a>Log Out</a>
        </Link>
    </div>
)

export default Header
