/// <reference types="Cypress"/>

import LogoutPage from "../e2e/pageObjects/logout.page"
import LoginPage from "../e2e/pageObjects/login.page"

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()

Cypress.Commands.add('login', (url, email, password) => {
    Cypress.session.clearCurrentSessionData()
    cy.visit(url)
    loginPage.enterEmail(email)
    loginPage.enterPassword(password)
    loginPage.clickOnLoginButton()
})

Cypress.Commands.add('logout', () => {
    logoutPage.clickOnUserInfoPanel()
    logoutPage.clickOnLogoutButton()
    cy.contains("Yes").click()
})