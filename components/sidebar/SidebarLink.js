import Link from 'next/link';

const SidebarLink = (props) => (
    <li>
        <Link href={props.link}>
            <a>
                {props.title}
            </a>
        </Link>
    </li>

);

export default SidebarLink;
