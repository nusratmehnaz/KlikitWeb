/// <reference types="Cypress"/>

import UserPage from '../pageObjects/user.page'
import CommonFunctionPage from '../pageObjects/commonFunctions.page'

const userPage = new UserPage()
const commonFunctions = new CommonFunctionPage()

const faker = require('faker')
let lastName = faker.name.lastName()

let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`
let email = 'automation.user' + `${Math.floor(Math.random() * (999 - 100) + 100)}` + '@mailinator.com'

const firstName = 'Automation User'
const editName = lastName + ' Edit'

describe('User login successfully and redirects to the order dashboard', () => {

    beforeEach(function () {
        cy.fixture('/data/url').then(function (url) {
            this.url = url
        })

        cy.fixture('/data/credentials').then(function (cred) {
            this.cred = cred
        })
    })

    it('Visit URL and hit login', function () {
        cy.login(this.url.qa.cloud, this.cred.email, this.cred.current)
    })
})

describe("User can successfully create another user account", () => {

    it('Select the User section and go to the user create form', () => {
        userPage.clickOnUserMenu()
        commonFunctions.containsF("New")
    })

    it('Enter all required information', () => {
        userPage.enterFirstName(firstName)
        userPage.enterLastName(lastName)
        userPage.enterEmail(email)
        userPage.enterPhoneNumber(phoneNumber)
    })

    it('Upload user image and verify the success toast messages', () => {
        userPage.uploadImage('cypress/fixtures/images/user_image.jpg')
        commonFunctions.verifyToastMessage('Profile image uploaded successfully!')
        cy.wait(2000)
    })

    it('Select the role and brand or branch from the dropdown', () => {
        // ! Use 0 for Brand Manager and 1 for Branch Manager
        userPage.selectRoleAndOption(0, 7)
    })

    it('Hit Save and verify the success message', () => {
        commonFunctions.containsF('Save')
        commonFunctions.verifyToastMessage('User Created successfully')
        cy.wait(2000)
    })
})

describe('User can successfully update any user account', () => {

    it('Search and select the user', () => {
        userPage.searchUser(lastName)
        cy.wait(2000)
        userPage.selectUser()
        cy.wait(1000)
    })

    it('Update the necessary information', () => {
        userPage.enterFirstName(firstName)
        userPage.enterLastName(editName)
        userPage.enterPhoneNumber(phoneNumber)
    })

    it('Hit Update and verify the success message', () => {
        commonFunctions.containsF('Update')
        commonFunctions.verifyToastMessage('User Updated successfully')
        cy.wait(2000)
    })
})

describe('User can successfully delete any user account', () => {

    it('Hit Delete and verify the success message', () => {
        commonFunctions.containsF('Delete')
        cy.wait(2000)
        userPage.confirmDelete()
        commonFunctions.verifyToastMessage('User deleted successfully')
        cy.wait(2000)
    })
})

describe('User successfully logged out from the portal', () => {

    it('Open the user info panel and hit logout', () => {
        cy.logout()
    })
})