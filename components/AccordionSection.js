// https://alligator.io/react/react-accordion-component/

import PropTypes from 'prop-types';

class AccordionSection extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    };

    onClick = () => {
        this.props.onClick(this.props.id);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label, id },
        } = this;

        return (
            <div>
                <div onClick={onClick}>
                    {label}
                </div>
                {isOpen && (
                    <div>
                        {this.props.children}
                    </div>
                )}
            </div>
        )
    }
}

export default AccordionSection;
