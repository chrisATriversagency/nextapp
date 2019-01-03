import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';

import Icon from '../Icon';
import { SecondaryLinkStyle } from '../Links';

const SidebarLink = ({ children, ...linkProps }) => (
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
    children: PropTypes.string.isRequired
};

export default SidebarLink;
