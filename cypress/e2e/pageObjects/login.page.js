class LoginPage {
    elements = {
        emailFLD: "[name='email']",
        passwordFLD: "[name='password']",
        loginBTN: ".w-full"
    }

    enterEmail(email){
        return cy.get(this.elements.emailFLD).type(email)
    }

    enterPassword(password){
        return cy.get(this.elements.passwordFLD).type(password)
    }

    clickOnLoginButton(){
        return cy.get(this.elements.loginBTN).click()
    }
}

export default LoginPage