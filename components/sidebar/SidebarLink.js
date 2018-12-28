import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../Icon';

const SidebarLink = (props) => (
    <li>
        <Link href={props.link}>
            <a>
                <Icon icon="arrow-right-2" />
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
