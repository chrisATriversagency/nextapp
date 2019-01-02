import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';

const SidebarClinic = (props) => (
    <UserContext.Consumer>
        {({updateActiveClinic}) => (
            <li>
                <a onClick={(e) => updateActiveClinic(props.id, e)}>
                    <span>{props.name}</span>
                </a>
            </li>
        )}
    </UserContext.Consumer>
)

SidebarClinic.propTypes = {
    name: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default SidebarClinic;
