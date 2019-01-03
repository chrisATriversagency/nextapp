// import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { SecondaryLinkStyle } from '../Links';
import Icon from '../Icon';

const SidebarLink = ({ text: children, ...linkProps }) => (
    <li>
        <Link {...linkProps} passHref>
            <SecondaryLinkStyle>
                <Icon icon="arrow-right-2" />
                <span>{children}</span>
            </SecondaryLinkStyle>
        </Link>
    </li>
);

SidebarLink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
}

export default SidebarLink;
