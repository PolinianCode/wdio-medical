import BaseComponent from "../common/base.component";

class AddDoctorModalComponent extends BaseComponent {
    constructor() {
        super('.new-doctor-dialog')
    }

    get closeModalButton() {
        return $('.e-dlg-closeicon-btn')
    }

    get saveDoctorModalButton() {
        return $('.e-footer-content button.e-primary')
    }

    /**
     * 
     * @param name {'name' | 'doctormobile' | 'email', 'education', 'designation'}
     * @returns {*}
     * 
     */

    input(param) {
        const selectors = {
            name: '[name="Name"]',
            doctormobile: '#DoctorMobile',
            email:'[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]',
        }

        return this.rootEl.$(selectors[param.toLowerCase()])
    }
}

export default AddDoctorModalComponent;