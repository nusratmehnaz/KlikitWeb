class LogoutPage {
    elements = {
        userinfoBTN: ".scam-user-info-dd",
        logoutBTN: "[title='Logout']"
    }

    clickOnUserInfoPanel() {
        return cy.get(this.elements.userinfoBTN).click()
    }

    clickOnLogoutButton() {
        return cy.get(this.elements.logoutBTN).click()
    }
}

export default LogoutPage