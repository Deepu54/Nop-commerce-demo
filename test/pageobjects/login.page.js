const dataInp =require('../../testConfig.json')
let date = new Date().getTime()
const utils = require('../specs/utils')
const _loginEmail ='#Email'
const _loginPassword ='#Password'
const _loginOnSubmitButton ='//button[contains(text(), "Log in")]'

class LoginPage {
    static async loginEmail() {
        await utils.typeText(_loginEmail,`${dataInp.firstEmail}${date}${dataInp.lastEmail}`)
    
    }
    static async loginPassword() {
        await utils.typeText(_loginPassword, dataInp.password)
    }
    static async loginSubmit() {
        await utils.clickOnElement(_loginOnSubmitButton)
    }
}
module.exports = LoginPage