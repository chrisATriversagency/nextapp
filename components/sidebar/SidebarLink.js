import PropTypes from 'prop-types';
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

SidebarLink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
}

export default SidebarLink;
