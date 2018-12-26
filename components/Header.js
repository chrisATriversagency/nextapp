import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/support">
          <a>Support</a>
        </Link>
    </div>
)

export default Header
