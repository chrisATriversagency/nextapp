import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/support">
          <a>Support</a>
        </Link>
        <Link href="/system-overview">
          <a>System Overview</a>
        </Link>
    </div>
)

export default Header
