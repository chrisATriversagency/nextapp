// https://alligator.io/react/react-accordion-component/

import PropTypes from 'prop-types';
import React from 'react';
import AnimateHeight from 'react-animate-height';

class AccordionSection extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    };

    onClick = () => {
        const { id, onClick } = this.props;
        onClick(id);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label, children }
        } = this;

        return (
            <div>
                <button type="button" onClick={onClick}>
                    {label}
                </button>
                <AnimateHeight
                    duration={500}
                    height={isOpen ? 'auto' : 0}
                >
                    <div>
                        {children}
                    </div>
                </AnimateHeight>
            </div>
        );
    }
}

export default AccordionSection;
