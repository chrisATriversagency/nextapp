import PropTypes from 'prop-types';

const User = (props) => (
    <div>
        <div>
            {props.userName}
        </div>
        <div>
            {props.currentClinic}
        </div>
    </div>
);

User.propTypes = {
    userName: PropTypes.string,
    currentClinic: PropTypes.string,
};

export default User;
