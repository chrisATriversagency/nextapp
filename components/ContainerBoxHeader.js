/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { colors } from '../utils/ThemeUtils';

const ContainerBoxHeader = props => (
    <header
        css={css`
            background-image: ${colors.headerGradient};
            text-align: center;
            color: ${colors.white};
        `}
    >
        {props.subTitle && <div>{props.subTitle}</div>}
        {props.title && <h1>{props.title}</h1>}
        {props.copy && <p>{props.copy}</p>}
    </header>
);

export default ContainerBoxHeader;

ContainerBoxHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    copy: PropTypes.string,
    note: PropTypes.string,
}
