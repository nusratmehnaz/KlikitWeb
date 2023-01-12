/// <reference types="Cypress"/>

const faker = require('faker')
const firstName = 'Automation User'
const edit = 'Edit'
let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`
let lastname = faker.name.lastName()

describe('User can successfully update his/her own information', () => {

    beforeEach(function () {
        cy.fixture('/locators/profile.json').then(function (profile) {
            this.profile = profile
        })
    })

    it('Open the user info panel and click on profile', function () {
        cy.wait(2000)
        cy.get(this.profile.userinfoBTN).click()
        cy.get(this.profile.profileBTN).click()
    });

    xit('Enter the updated information', function () {
        cy.get(this.profile.firstnameFLD).clear().type(firstName)
        cy.get(this.profile.lastnameFLD).clear().type(lastname + ' ' + edit)
        cy.get(this.profile.phoneFLD).clear().type(phoneNumber)
    });

    it('Click on Update button and verify the success toast message', function () {
        cy.contains('Update').click();
        cy.get(this.profile.toastMSG).should('have.text', 'User updated successfully');
    })
})

describe('User can successfully change the password', () => {

    beforeEach(function () {
        cy.fixture('/locators/profile.json').then(function (profile) {
            this.profile = profile
        })
        cy.fixture('/data/credentials').then(function (credentials) {
            this.credentials = credentials
        })
    })

    it('Go to the change password section', function () {
        cy.contains('Change Password').click()
        cy.get(this.profile.currectPassFLD).type(this.credentials.current)
        cy.get(this.profile.newPassFLD).type(this.credentials.new)
        cy.get(this.profile.confirmPassFLD).type(this.credentials.new)
    });

    it('Click on Update button and verify the success toast message', function () {
        cy.contains('Update').click()
        cy.get(this.profile.toastMSG).should('have.text', 'Password change successfully')
    })
})