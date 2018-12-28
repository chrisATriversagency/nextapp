// https://alligator.io/react/react-accordion-component/

import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';

class Accordion extends React.Component {
    static propTypes = {
        allowMultipleOpen: PropTypes.bool,
        children: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);

        const openSections = {};
        this.state = { openSections };

        this.props.children.forEach(child => {
            if (child.props.isOpen) {
                openSections[child.props.id] = true;
            }
        });
    }

    onClick = id => {
        const {
            props: { allowMultipleOpen },
            state: { openSections },
        } = this;

        const isOpen = !!openSections[id];

        if (allowMultipleOpen) {
            this.setState({
                openSections: {
                    ...openSections,
                    [id]: !isOpen,
                }
            });
        } else {
            this.setState({
                openSections: {
                    [id]: !isOpen
                }
            });
        }
    };

    render() {
        const {
            onClick,
            props: { children },
            state: { openSections },
        } = this;

        return (
            <div>
                {children.map(child => (
                    <AccordionSection
                        isOpen={!!openSections[child.props.id]}
                        label={child.props.label}
                        onClick={onClick}
                        key={child.props.id}
                        id={child.props.id}
                        >
                        {child.props.children}
                    </AccordionSection>
                ))}
            </div>
        )
    }
}

export default Accordion;
