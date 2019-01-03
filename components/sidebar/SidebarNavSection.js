import PropTypes from 'prop-types';

import SidebarLink from './SidebarLink';

const SidebarNavSection = props => (
    <div>
        <h3>{props.title}</h3>
        <ul>
            {props.links.map(({ href, id, text }) => (
                <SidebarLink key={id} {...{ href, text }} />
            ))}
        </ul>
    </div>
);

SidebarNavSection.propTypes = {
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object)
}

export default SidebarNavSection;
