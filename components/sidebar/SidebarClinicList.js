import SidebarClinic from './SidebarClinic';

import sidebarClinics from '../../data/sidebarClinics';

const SidebarClinicList = () => (
    <div>
        <div>
            <button type="button" name="button">
                Change Clinic
            </button>
        </div>
        <ul>
            {sidebarClinics.map((clinic) => (
                <SidebarClinic key={clinic.id} name={clinic.name} />
            ))}
        </ul>
    </div>
)
 export default SidebarClinicList;
