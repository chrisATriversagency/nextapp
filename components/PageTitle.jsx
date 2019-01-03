import PropTypes from 'prop-types';
import React from 'react';

const PageTitle = ({ title, copy }) => (
    <div>
        <h1>{title}</h1>
        <p>{copy}</p>
    </div>
);

PageTitle.defaultProps = {
    title: '',
    copy: ''
};

PageTitle.propTypes = {
    title: PropTypes.string,
    copy: PropTypes.string
};

export default PageTitle;
