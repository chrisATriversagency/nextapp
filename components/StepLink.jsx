import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const StepLink = ({
    title,
    icon,
    copy,
    number
}) => (
    <li>
        <article>
            <Link href={`/step?title=${title}`}>
                <button type="button">
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
                        {number}
                    </div>
                </button>
            </Link>
        </article>
    </li>
);

StepLink.defaultProps = {
    icon: '',
    title: '',
    copy: '',
    number: ''
};

StepLink.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    copy: PropTypes.string,
    number: PropTypes.string
};

export default StepLink;
