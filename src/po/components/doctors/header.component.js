class DoctorsHeaderComponent {

    get rootEl() {
        return $('.specialization-types')
    }


    get addNewDoctorButton() {
        return this.rootEl.$('button.e-control')
    }

}

export default DoctorsHeaderComponent;