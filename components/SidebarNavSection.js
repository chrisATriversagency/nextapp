import SidebarLink from './SidebarLink';

const SidebarNavSection = props => (
    <div>
        <h3>{props.title}</h3>
        <ul>
            {props.links.map((link) => (
                <SidebarLink link={link.url} title={link.text} />
            ))}
        </ul>
    </div>
);

export default SidebarNavSection;
