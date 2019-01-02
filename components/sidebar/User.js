import PropTypes from 'prop-types';

import clinics from '../../data/sidebarClinics';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    getCurrentClinic() {
        return clinics.find(item => {
            if (item.id === this.props.currentClinic) {
                return true;
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.userName}
                </div>
                <div>
                    {this.getCurrentClinic().name}
                </div>
            </div>
        )
    }
}

User.propTypes = {
    userName: PropTypes.string,
    currentClinic: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default User;
