/// <reference types="Cypress"/>

import BrandPage from '../pageObjects/brand.page'
import CommonFunctionPage from '../pageObjects/commonFunctions.page'

const brandPage = new BrandPage()
const commonFunctions = new CommonFunctionPage()

const faker = require('faker')
let city = faker.address.cityName()

const brandName = 'Automation Brand'
const label = 'QR Label'
const url = 'QR URL'
const edit = 'Edit'

const brand = brandName + ' ' + city
const editBrand = brand + ' ' + edit

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

describe("User can successfully create a brand", () => {

    it('Select the Brand section and go to the brand create form', () => {
        brandPage.clickOnBrandMenu()
        commonFunctions.containsF('New')
    });

    it('Upload brand banner & logo and verify the success messages', () => {
        brandPage.uploadBanner('cypress/fixtures/images/banner.jpg')
        commonFunctions.verifyToastMessage('Banner added successfully')
        cy.wait(3000)
        brandPage.uploadLogo('cypress/fixtures/images/logo.png')
        commonFunctions.verifyToastMessage('Logo added successfully')
    });

    it('Enter all required information', () => {
        brandPage.enterBrandName(brand)
        brandPage.enterQRLabel(brand + ' ' + label)
        brandPage.enterQrURL(brand + ' ' + url)
    });

    it('Select cuisines', () => {
        brandPage.clickOnCuisineEditIcon()
        brandPage.selectCuisine(9)
        commonFunctions.containsF('Done')
    });

    it('Hit Save and verify the success message', () => {
        commonFunctions.containsF('Save')
        commonFunctions.verifyToastMessage('Brand created successfully')
        cy.wait(2000);
    });
})

describe('User can successfully update any brand', () => {

    it('Search and select the brand', () => {
        brandPage.searchBrand(city)
        cy.wait(2000)
        brandPage.selectBrand()
        cy.wait(1000)
    });

    it('Update the necessary information', () => {
        brandPage.enterBrandName(editBrand)
        brandPage.enterQRLabel(editBrand + ' ' + label)
        brandPage.enterQrURL(editBrand + ' ' + url)
    });

    it('Click on Update button and verify the success toast message', () => {
        commonFunctions.containsF('Update')
        commonFunctions.verifyToastMessage('Brand updated successfully')
        cy.wait(4000)
    });
})

describe('User successfully logged out from the portal', () => {

    it('Open the user info panel and hit logout', function () {
        cy.logout()
    })
})
