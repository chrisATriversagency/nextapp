import SidebarClinic from './SidebarClinic';
import Button from '../Button';
import AnimateHeight from 'react-animate-height';

import sidebarClinics from '../../data/sidebarClinics';

class SidebarClinicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.handelButtonClick = this.handelButtonClick.bind(this);
    }

    handelButtonClick() {
        this.setState(prevState => {
            return {
                isOpen: !prevState.isOpen
            }
        });
    }

    render() {
        return (
            <div>
                <AnimateHeight
                    duration={ 500 }
                    height={ this.state.isOpen ? 'auto' : 0 }
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
