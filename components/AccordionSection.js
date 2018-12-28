// https://alligator.io/react/react-accordion-component/

import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

class AccordionSection extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };
    }

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
                <AnimateHeight
                    duration={ 500 }
                    height={ isOpen ? 'auto' : 0 }
                >
                    <div>
                        {this.props.children}
                    </div>
                </AnimateHeight>
            </div>
        )
    }
}

export default AccordionSection;
