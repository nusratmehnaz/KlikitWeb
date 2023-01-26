/// <reference types="Cypress"/>

import LocationPage from '../pageObjects/location.page'
import CommonFunctionPage from '../pageObjects/commonFunctions.page'

const locationPage = new LocationPage()
const commonFunctions = new CommonFunctionPage()

const faker = require('faker')
let city = faker.address.cityName()
let latitude = faker.address.latitude()
let longitude = faker.address.longitude()
let address = faker.address.streetAddress()

let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`

const branch = 'Automation Branch ' + city
const editBranch = branch + ' Edit'

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

describe('User can successfully create a location', () => {

    it('Select the Location section and go to the location create form', () => {
        locationPage.clickOnLocationMenu()
        commonFunctions.containsF("New")
    })

    it('Enter all required information', () => {
        locationPage.enterLocationName(branch)
        locationPage.enterPhoneNumber(phoneNumber)
        locationPage.enterAddress(address)
        locationPage.enterLatitude(latitude)
        locationPage.enterLongitude(longitude)
    })

    it('Select time and days', () => {
        locationPage.selectOpenTime(7)
        locationPage.selectCloseTime(15)
        commonFunctions.containsF("Select All")
    })

    it('Select Kitchen Equipments', () => {
        locationPage.selectEquipment(11)
        commonFunctions.containsF('Done')
    })

    it('Select printer type, city and brand from the dropdowns', () => {
        locationPage.selectPrinter(1)
        locationPage.selectCity(34)
        locationPage.selectBrand(3)
    })

    it('Hit Save and verify the success message', () => {
        commonFunctions.containsF('Save')
        commonFunctions.verifyToastMessage('Branch created successfully')
        cy.wait(2000)
    })
})

describe('User can successfully update any location', () => {

    it('Search and select the location', () => {
        locationPage.searchLocation(city)
        cy.wait(2000)
        locationPage.selectLocation()
        cy.wait(2000)
    })

    it('Update the necessary information', () => {
        locationPage.enterLocationName(editBranch)
        locationPage.enterPhoneNumber(phoneNumber)
        locationPage.enterAddress(address)
        locationPage.enterLatitude(latitude)
        locationPage.enterLongitude(longitude)
    })

    it('Hit Update and verify the success message', () => {
        commonFunctions.containsF('Update')
        commonFunctions.verifyToastMessage('Branch updated successfully')
        cy.wait(2000)
    })
})

describe('User successfully logged out from the portal', () => {

    it('Open the user info panel and hit logout', () => {
        cy.logout()
    })
})