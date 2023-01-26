class UserPage {
    elements = {
        userBTN: "a[title='User']",
        firstNameFLD: "[name='first_name']",
        lastNameFLD: "[name='last_name']",
        emailFLD: "[name='email']",
        phoneFLD: "[name='phone']",
        addBTN: "#userUpload",
        roleDropdown: ".scam-form-user-role-select .sc-selector",
        brandDropdown: ".scam-form-user-brand-select .sc-selector",
        branchDropdown: ".scam-form-user-branch-select .sc-selector",
        optionSelect: ".sc-select-dropdown-item",
        searchBox: "[placeholder='Enter name to search']",
        selectUser: ".list-container .cursor-pointer:first-child",
        confDeleteBTN: "div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)",
        profileBTN: ".scam-profile-link",
        currentPassFLD: "[name='old_password']",
        newPassFLD: "[name='new_password']",
        confirmPassFLD: "[name='confirmPassword']"
    }

    clickOnUserMenu() {
        return cy.get(this.elements.userBTN).click({ force: true })
    }

    enterFirstName(name) {
        return cy.get(this.elements.firstNameFLD).clear().type(name)
    }

    enterLastName(name) {
        return cy.get(this.elements.lastNameFLD).clear().type(name)
    }

    enterEmail(email) {
        return cy.get(this.elements.emailFLD).clear().type(email)
    }

    enterPhoneNumber(num) {
        return cy.get(this.elements.phoneFLD).clear().type(num)
    }

    uploadImage(imagePath) {
        return cy.get(this.elements.addBTN).selectFile(imagePath, { force: true })
    }

    selectRoleAndOption(roleNo, optionNo) {
        return cy.get(this.elements.roleDropdown).click().then(() => {
            cy.get(this.elements.optionSelect).eq(roleNo).click()
            if (roleNo === 0) {
                cy.get(this.elements.brandDropdown).click({ force: true }).then(() => {
                    cy.get(this.elements.optionSelect).eq(optionNo).click({ force: true })
                })
            } else if (roleNo === 1) {
                cy.get(this.elements.branchDropdown).click({ force: true }).then(() => {
                    cy.get(this.elements.optionSelect).eq(optionNo).click({ force: true })
                })
            }
        })
    }

    searchUser(name) {
        return cy.get(this.elements.searchBox).type(name)
    }

    selectUser() {
        return cy.get(this.elements.selectUser).click()
    }

    confirmDelete() {
        return cy.get(this.elements.confDeleteBTN).click()
    }

    clickOnProfile() {
        return cy.get(this.elements.profileBTN).click()
    }

    enterCurrentPassword(pass) {
        return cy.get(this.elements.currentPassFLD).type(pass)
    }

    enterNewPassword(pass) {
        return cy.get(this.elements.newPassFLD).type(pass)
    }

    confirmNewPassword(pass) {
        return cy.get(this.elements.confirmPassFLD).type(pass)
    }
}

export default UserPage