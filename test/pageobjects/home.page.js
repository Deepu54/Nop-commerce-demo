const utils = require('../specs/utils')
const _registrationButton= '.ico-register'
const _loginButton='.ico-login'
const _searchButton='[id="small-searchterms"]'
const _searchIcon='//button[text()="Search"]'
const dataInp = require('../../testConfig.json')
let date = new Date().getTime()
const recentEmail = date

class Homepage {
    static async registerButton() {
        await utils.clickOnElement(_registrationButton);
    }
    static async loginButton() {
        await utils.clickOnElement(_loginButton)
    }
   
    static async searchButton() {
        await utils.typeText(_searchButton,dataInp.cameraSearch)
    }
    static async clicked() {
        await utils.clickOnElement(_searchIcon)
    }
}

module.exports = Homepage
