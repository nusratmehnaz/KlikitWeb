/// <reference types="Cypress"/>

const faker = require('faker')
const firstName = 'Automation User'
let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`
let lastname = faker.name.lastName()
let newUserMail = 'automation.user' + `${Math.floor(Math.random() * (999 - 100) + 100)}` + '@mailinator.com'

describe("User can successfully create another user account", () => {

    beforeEach(function () {
        cy.fixture('/locators/user.json').then(function (user) {
            this.user = user
        })
        cy.fixture('/data/credentials.json').then(function (data) {
            this.data = data
        })
    })

    it('Go to the User section and click on new button', function () {
        cy.get(this.user.userBTN).click({ force: true })
        cy.contains("New").click()
    });

    it('Enter all required informations', function () {
        cy.get(this.user.firstnameFLD).type(firstName);
        cy.get(this.user.lastnameFLD).type(lastname);
        cy.get(this.user.emailFLD).type(newUserMail);
        cy.get(this.user.phoneFLD).type(phoneNumber)
    });

    it('Upload user image and verify the success toast messages', function () {
        cy.get(this.user.addBTN).selectFile('cypress/fixtures/images/user_image.jpg', { force: true })
        cy.get(this.user.toastMSG).should('have.text', 'Profile image uploaded successfully!');
    });

    it('Select the role', function () {
        cy.get(this.user.roleDPDW).click();
        cy.get(this.user.roleSLCT).click()
        cy.get(this.user.brandDPDW).click({ force: true });
        cy.get(this.user.brandSLCT).click({ force: true })
        cy.wait(3000);
    });

    it('Click on Save button and verify the success toast message', function () {
        cy.contains('Save').click({ force: true })
        cy.get(this.user.toastMSG).should('have.text', 'User Created successfully');
    });
})