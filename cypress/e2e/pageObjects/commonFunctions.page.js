class CommonFunctionPage {
    elements = {
        emailFLD: "[name='email']",
        passwordFLD: "[name='password']",
        loginBTN: ".w-full",
        userinfoBTN: ".scam-user-info-dd",
        logoutBTN: "[title='Logout']",
        toastMSG: ".Toastify"
    }

    enterEmail(email) {
        return cy.get(this.elements.emailFLD).type(email)
    }

    enterPassword(password) {
        return cy.get(this.elements.passwordFLD).type(password)
    }

    clickOnLoginButton() {
        return cy.get(this.elements.loginBTN).click()
    }

    containsF(text) {
        cy.contains(text).click()
    }

    verifyToastMessage(message) {
        return cy.get(this.elements.toastMSG).should('have.text', message)
    }

    clickOnUserInfoPanel() {
        return cy.get(this.elements.userinfoBTN).click()
    }

    clickOnLogoutButton() {
        return cy.get(this.elements.logoutBTN).click()
    }
}

export default CommonFunctionPage