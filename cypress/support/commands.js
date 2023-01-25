/// <reference types="Cypress"/>

import CommonFunctionPage from "../e2e/pageObjects/commonFunctions.page"

const commonFunctions = new CommonFunctionPage()

Cypress.Commands.add('login', (url, email, password) => {
    Cypress.session.clearCurrentSessionData()
    cy.visit(url)
    commonFunctions.enterEmail(email)
    commonFunctions.enterPassword(password)
    commonFunctions.clickOnLoginButton()
})

Cypress.Commands.add('logout', () => {
    commonFunctions.clickOnUserInfoPanel()
    commonFunctions.clickOnLogoutButton()
    commonFunctions.containsF("Yes")
})