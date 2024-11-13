import BaseComponent from "../common/base.component";

class DoctorsHeaderComponent extends BaseComponent {
    constructor() {
        super('.specialization-types')
    }


    get addNewDoctorButton() {
        return this.rootEl.$('button.e-control')
    }

}

export default DoctorsHeaderComponent;