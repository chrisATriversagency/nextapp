import PropTypes from 'prop-types';
import Link from 'next/link';
import { SecondaryLinkStyle } from '../Links';
import Icon from '../Icon';

const SidebarLink = (props) => (
    <li>
        <Link href={props.link} passHref>
            <SecondaryLinkStyle>
                <Icon icon="arrow-right-2" />
                {props.title}
            </SecondaryLinkStyle>
        </Link>
    </li>

);

SidebarLink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
}

export default SidebarLink;
