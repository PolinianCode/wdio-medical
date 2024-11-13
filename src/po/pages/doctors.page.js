import DoctorsHeaderComponent from "../components/doctors/header.component";
import AddDoctorModalComponent from "../components/doctors/add-doctor.component"
import BasePage from "./base.page";

class DoctorsPage extends BasePage {

    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors")
        this.doctorsHeaderCompnent = new DoctorsHeaderComponent;
        this.addDoctorModal = new AddDoctorModalComponent;
    }
}

export default DoctorsPage;
