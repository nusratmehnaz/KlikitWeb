/// <reference types="Cypress"/>

const faker = require('faker')
const firstName = 'Automation User'
const edit = 'Edit'
const branch = 'Branch'
const brand = 'Brand'
let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`
let lastname = faker.name.lastName()
let newUserMail = 'automation.user' + `${Math.floor(Math.random() * (999 - 100) + 100)}` + '@mailinator.com'

describe("User can successfully create another user account", () => {

    beforeEach(function () {
        cy.fixture('/locators/user.json').then(function (user) {
            this.user = user
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

    it('Select the role and brand from the dropdowns', function () {
        cy.get(this.user.roleDPDW).click();
        // cy.get(this.user.roleSLCT).contains(brand).click()
        // cy.get(this.user.brandDPDW).click({ force: true })

        cy.get(this.user.roleSLCT).contains(branch).click()
        cy.get(this.user.branchDPDW).click({ force: true })

        cy.get(this.user.optionSLCT).eq(1).click({ force: true })
        cy.wait(3000);
    });

    it('Click on Save button and verify the success toast message', function () {
        cy.contains('Save').click({ force: true })
        cy.get(this.user.toastMSG).should('have.text', 'User Created successfully');
        cy.wait(2000);
    });
})

describe('User can successfully update any user account', () => {

    beforeEach(function () {
        cy.fixture('/locators/user.json').then(function (user) {
            this.user = user
        })
    })

    it('Search and select the user', function () {
        cy.get(this.user.searchBX).type(firstName)
        cy.contains(firstName).first().click()
    });

    xit('Update the necessary informations', function () {
        cy.get(this.user.firstnameFLD).clear().type(firstName);
        cy.get(this.user.lastnameFLD).clear().type(lastname + ' ' + edit)
        cy.get(this.user.phoneFLD).clear().type(phoneNumber)
    });

    it('Click on Update button and verify the success toast message', function () {
        cy.contains('Update').click({ force: true });
        cy.get(this.user.toastMSG).should('have.text', 'User Updated successfully');
        cy.wait(2000);
    });
});

describe('User can successfully delete any user account', () => {

    beforeEach(function () {
        cy.fixture('/locators/user.json').then(function (user) {
            this.user = user
        })
    })

    it('Click on Delete button and verify the success toast message', function () {
        cy.contains('Delete').click({ force: true })
        cy.wait(2000);
        cy.get(this.user.deleteBTN).click()
        cy.get(this.user.toastMSG).should('have.text', 'User deleted successfully');
        cy.wait(2000);
    });
});