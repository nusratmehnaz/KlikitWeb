class BrandPage {
    elements = {
        brandBTN: "a[title='Brand']",
        addBannerBTN: "#banner",
        addLogoBTN: "#logo",
        brandNameFLD: "[name='title']",
        QRLabelFLD: "[name='label']",
        QRurlFLD: ".sc-textarea",
        cuisineEditIcon: "[title='Add/Edit Cuisine Information']",
        cuisineCHECKBOX: ".cuisine-item .sc-checkbox input",
        searchBOX: "[name='search']",
        selectBrand: ".brand-list-container a"
    }

    clickOnBrandMenu(){
        return cy.get(this.elements.brandBTN).click({ force: true })
    }

    uploadBanner(bannerPath){
        return cy.get(this.elements.addBannerBTN).selectFile(bannerPath, { force: true })
    }

    uploadLogo(logoPath){
        return cy.get(this.elements.addLogoBTN).selectFile(logoPath, { force: true })
    }

    enterBrandName(name){
        return cy.get(this.elements.brandNameFLD).clear().type(name)
    }

    enterQRLabel(label){
        return cy.get(this.elements.QRLabelFLD).clear().type(label)
    }

    enterQrURL(url){
        return cy.get(this.elements.QRurlFLD).clear().type(url)
    }

    clickOnCuisineEditIcon(){
        return cy.get(this.elements.cuisineEditIcon).click()
    }

    selectCuisine(){
        return cy.get(this.elements.cuisineCHECKBOX).first().check({ force: true })
    }

    searchBrand(name){
        return cy.get(this.elements.searchBOX).type(name)
    }

    selectBrand(){
        return cy.get(this.elements.selectBrand).click()
    }
}

export default BrandPage