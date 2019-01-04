import fetch from 'isomorphic-fetch';

export default class API {
    static getClinicList() {
        fetch('../static/data/sidebarClinics.json')
            .then(response => response.json())
            .then(json => json);
    }
}
