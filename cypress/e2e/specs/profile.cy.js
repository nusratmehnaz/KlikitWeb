/// <reference types="Cypress"/>

import UserPage from '../pageObjects/user.page'
import CommonFunctionPage from '../pageObjects/commonFunctions.page'

const userPage = new UserPage()
const commonFunctions = new CommonFunctionPage()

let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`

const firstName = 'Main Automation User'
const editName = 'Changed'

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

describe('User can successfully update his/her own profile information', () => {

    it('Open the user info panel and hit profile', () => {
        commonFunctions.clickOnUserInfoPanel()
        userPage.clickOnProfile()
    })

    it('Enter the updated information', () => {
        userPage.enterFirstName(firstName)
        userPage.enterLastName(editName)
        userPage.enterPhoneNumber(phoneNumber)
    })

    it('Click on Update button and verify the success toast message', () => {
        commonFunctions.containsF('Update')
        commonFunctions.verifyToastMessage('User updated successfully')
        cy.wait(2000)
    })
})

describe('User can successfully change the password', () => {

    beforeEach(function () {
        cy.fixture('/data/credentials').then(function (cred) {
            this.cred = cred
        })
    })

    it('Redirect to the change password page', function () {
        commonFunctions.containsF('Change Password')
        userPage.enterCurrentPassword(this.cred.current)
        userPage.enterNewPassword(this.cred.new)
        userPage.confirmNewPassword(this.cred.new)
    })

    it('Hit Update and verify the success message', () => {
        commonFunctions.containsF('Update')
        commonFunctions.verifyToastMessage('Password change successfully')
        cy.wait(2000)
    })
})