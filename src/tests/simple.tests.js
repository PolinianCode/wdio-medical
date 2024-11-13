import DashboardPage from "./../po/pages/dashboard.page.js";
import DoctorsPage from "../po/pages/doctors.page.js";

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();


describe('Doctors page', () => {
    beforeEach(async() => {
        await dashboardPage.open()
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open model window for adding a new doctor', async() => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorsHeaderCompnent.addNewDoctorButton.click()
        await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed()
    })

    it('Add a new doctor', async() => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorsHeaderCompnent.addNewDoctorButton.click()
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed()

        await doctorsPage.addDoctorModal.input('name').setValue('John Doe')
        await doctorsPage.addDoctorModal.input('doctormobile').setValue('1111111111')
        await doctorsPage.addDoctorModal.input('email').setValue('johndoe@gmail.com')
        await doctorsPage.addDoctorModal.input('designation').setValue('Junir Specialist')
        await doctorsPage.addDoctorModal.input('education').setValue('Medical University')

        await doctorsPage.addDoctorModal.saveDoctorModalButton.click()
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed()

        await expect(doctorsPage.specialist(8).name).toHaveText("Dr. John Doe", {ignoreCase: true})
        await expect(doctorsPage.specialist(8).education).toHaveText("Medical University", {ignoreCase: true})
    })
 
    it('Closing add new doctar modal window with a cross button', async() => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorsHeaderCompnent.addNewDoctorButton.click()
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed()
        await doctorsPage.addDoctorModal.closeModalButton.click()
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed()
    })
})