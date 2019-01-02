/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from './Button';
import { colors } from '../utils/ThemeUtils';

const Card = (props) => (
    <article
        css={css`
            background-color: $white;
            border-radius: 4px;
            text-align: center;
            border: 1px solid ${colors.borderGrey};
            border-top: 7px solid ${colors.purple};
            display: flex;
            width: 100%;
            overflow: hidden;
        `}
    >
        <Link href={props.info.link}>
            <a>
                <div>
                    <div>
                        <img src={props.info.icon} />
                    </div>
                    <h2>{props.info.title}</h2>
                    <p>
                        {props.info.copy}
                    </p>
                </div>
                <div>
                    <Button variant="purple">{props.info.buttonText}</Button>
                </div>
            </a>
        </Link>
    </article>
);

Card.propTypes = {
    info: PropTypes.shape({
        link: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        copy: PropTypes.string,
        buttonText: PropTypes.string,
    })
}

export default Card;
