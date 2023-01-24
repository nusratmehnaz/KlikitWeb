class CommonFunctionPage{
    elements = {
        toastMSG: ".Toastify"
    } 

    containsF(text){
        cy.contains(text).click()
    }

    verifyToastMessage(message){
        return cy.get(this.elements.toastMSG).should('have.text', message)
    }
}

export default CommonFunctionPage