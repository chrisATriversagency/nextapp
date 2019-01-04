import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';

import Icon from '../Icon';
import { SecondaryLinkStyle } from '../Links';

const SidebarLink = ({ text, ...linkProps }) => (
    <li>
        <Link {...linkProps} passHref>
            <SecondaryLinkStyle>
                <Icon icon="arrow-right-2" />
                <span>{text}</span>
            </SecondaryLinkStyle>
        </Link>
    </li>
);

SidebarLink.propTypes = {
    text: PropTypes.string.isRequired
};

export default SidebarLink;
