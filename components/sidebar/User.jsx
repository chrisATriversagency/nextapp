import PropTypes from 'prop-types';
import React from 'react';

const User = ({ userName, clinicName }) => (
    <div>
        <div>
            {userName}
        </div>
        <div>
            {clinicName}
        </div>
    </div>
);

User.defaultProps = {
    userName: '',
    clinicName: ''
};

User.propTypes = {
    userName: PropTypes.string,
    clinicName: PropTypes.string
};

export default User;
