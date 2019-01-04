import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import Button from '../Button';
import SidebarClinic from './SidebarClinic';

class SidebarClinicList extends Component {
    static defaultProps = {
        clinics: [
            {
                name: 'Hope Valley Medical',
                id: 1,
                path: 'imporvement'
            },
            {
                name: 'St. Joseph Memorial Hospital',
                id: 2,
                path: 'impementation'
            }
        ]
    }

    static propTypes = {
        clinics: PropTypes.instanceOf(Array)
    };

    state = {
        isOpen: false
    };

    handelButtonClick = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        const { clinics } = this.props;
        const { isOpen } = this.state;
        return (
            <div>
                <AnimateHeight
                    duration={500}
                    height={isOpen ? 'auto' : 0}
                >
                    <ul>
                        {clinics.map(clinic => (
                            <SidebarClinic key={clinic.id} name={clinic.name} id={clinic.id} />
                        ))}
                    </ul>
                </AnimateHeight>
                <div>
                    <Button onClick={this.handelButtonClick} variant="purple" size="small">Change Clinic</Button>
                </div>
            </div>
        );
    }
}

export default SidebarClinicList;
