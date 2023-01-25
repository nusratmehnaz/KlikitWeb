class LocationPage {
    elements = {
        locationBTN: "a[title='Location']",
        branchNameFLD: "[name='title']",
        phoneFLD: "[name='phone']",
        addressFLD: "[name='address']",
        latitudeFLD: "[name='lat']",
        longitudeFLD: "[name='lon']",
        openTimeDropdown: ".scam-branch-opening-time-picker .sc-timepicker",
        closeTimeDropdown: ".scam-branch-closing-time-picker .sc-timepicker",
        selectTime: "div.hour-half [class=' sc-timepicker-dropdown-row']",
        equipmentEditIcon: "[title='Add/Edit Kitchen Equipment']",
        equipmentCheckbox: ".kit-equip .sc-checkbox input",
        printerDropdown: ".scam-location-printer-select .sc-selector",
        cityDropdown: ".scam-location-city-select .sc-selector",
        brandDropdown: ".scam-location-brands-select .sc-selector",
        selectOption: ".sc-select-dropdown-item",
        searchBox: "[name='search']",
        selectLocation: ".url-list-container a"
    }

    clickOnLocationMenu() {
        return cy.get(this.elements.locationBTN).click({ force: true })
    }

    enterLocationName(name) {
        return cy.get(this.elements.branchNameFLD).clear().type(name)
    }

    enterPhoneNumber(num) {
        return cy.get(this.elements.phoneFLD).clear().type(num)
    }

    enterAddress(address) {
        return cy.get(this.elements.addressFLD).clear().type(address)
    }

    enterLatitude(lat) {
        return cy.get(this.elements.latitudeFLD).clear().type(lat)
    }

    enterLongitude(long) {
        return cy.get(this.elements.longitudeFLD).clear().type(long)
    }

    selectOpenTime(time) {
        return cy.get(this.elements.openTimeDropdown).click().then(() => {
            cy.get(this.elements.selectTime).eq(time).click()
        })
    }

    selectCloseTime(time) {
        return cy.get(this.elements.closeTimeDropdown).click().then(() => {
            cy.get(this.elements.selectTime).eq(time).click()
        })
    }

    selectEquipment(no) {
        return cy.get(this.elements.equipmentEditIcon).click().then(() => {
            cy.get(this.elements.equipmentCheckbox).eq(no).check({ force: true })
        })
    }

    selectPrinter(no) {
        return cy.get(this.elements.printerDropdown).click().then(() => {
            cy.get(this.elements.selectOption).eq(no).click()
        })
    }

    selectCity(no) {
        return cy.get(this.elements.cityDropdown).click().then(() => {
            cy.get(this.elements.selectOption).eq(no).click()
        })
    }

    selectBrand(no) {
        return cy.get(this.elements.brandDropdown).click().then(() => {
            cy.get(this.elements.selectOption).eq(no).click()
        })
    }

    searchLocation(name){
        return cy.get(this.elements.searchBox).type(name)
    }

    selectLocation(){
        return cy.get(this.elements.selectLocation).click()
    }
}

export default LocationPage