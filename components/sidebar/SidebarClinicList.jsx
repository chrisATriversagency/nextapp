import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import Button from '../Button';
import SidebarClinic from './SidebarClinic';

import sidebarClinics from '../../data/sidebarClinics';

class SidebarClinicList extends Component {
    state = {
        isOpen: false
    };

    handelButtonClick = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <AnimateHeight
                    duration={500}
                    height={isOpen ? 'auto' : 0}
                >
                    <ul>
                        {sidebarClinics.map((clinic) => {
                            if (this.props.clinicIds.indexOf(clinic.id) !== -1) {
                                return <SidebarClinic key={clinic.id} name={clinic.name} id={clinic.id} />
                            }
                        })}
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
