import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';

import { colors } from '../utils/ThemeUtils';

import Button from './Button';

const Article = styled.article`
    background-color: $white;
    border-radius: 4px;
    text-align: center;
    border: 1px solid ${colors.borderGrey};
    border-top: 7px solid ${colors.purple};
    display: flex;
    width: 100%;
    overflow: hidden;
`;

const Card = ({
    buttonText,
    copy,
    icon,
    link,
    title
}) => (
    <Article>
        <Link href={link}>
            <a href={link}>
                <div>
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <h2>{title}</h2>
                    <p>
                        {copy}
                    </p>
                </div>
                <div>
                    <Button variant="purple">{buttonText}</Button>
                </div>
            </a>
        </Link>
    </Article>
);

Card.defaultProps = {
    buttonText: '',
    copy: '',
    icon: '',
    link: '',
    title: ''
};

Card.propTypes = {
    buttonText: PropTypes.string,
    copy: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string
};

export default Card;
