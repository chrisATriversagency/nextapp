import SidebarLink from './SidebarLink';

const SidebarNavSection = props => (
    <div>
        <h3>{props.title}</h3>
        <ul>
            {props.links.map((link) => (
                <SidebarLink key={link.id} link={link.href} title={link.text} />
            ))}
        </ul>
    </div>
);

export default SidebarNavSection;
