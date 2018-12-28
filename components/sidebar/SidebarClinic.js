import PropTypes from 'prop-types';

const SidebarClinic = (props) => (
    <li>
        <a>
            <span>{props.name}</span>
        </a>
    </li>
)

SidebarClinic.propTypes = {
    name: PropTypes.string
}

export default SidebarClinic;
