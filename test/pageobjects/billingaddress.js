const utils = require('..//specs/utils')
const dataInp=require('..//..//testConfig.json')

const _firstName='[id="BillingNewAddress_FirstName"]'
const _lastName='[id="BillingNewAddress_LastName"]'
const _email ='[id="BillingNewAddress_Email"]'
const _company='[id="BillingNewAddress_Company"]'
const _country='[id="BillingNewAddress_CountryId"]'
const _city='[id="BillingNewAddress_City"]'
const _address='[id="BillingNewAddress_Address1"]'
const _zipCode='[name="BillingNewAddress.ZipPostalCode"]'
const _phoneNumber='[id="BillingNewAddress_PhoneNumber"]'
const _billingAddress='(//button[@class="button-1 new-address-next-step-button"])[1]'

class BillingAddress {
    static async Firstname() {
        await utils.typeText(_firstName,dataInp.Firstname)
    }
    static async lastName() {
        await utils.typeText(_lastName,dataInp._lastName)
    }
    static async Email() {
        await utils.typeText(_email,dataInp.Email)
    }
    static async company() {
        await utils.typeText(_company,dataInp)
    }
    static async country() {
        await $(_country).selectByIndex(133)
    }
    static async city() {
        await utils.typeText(_city,dataInp.city)
    }
    static async _address() {
        await utils.typeText(_address,dataInp.Address)
    }
    
    static async postal() {
        await utils.typeText(_zipCode,dataInp.postalcode)
    }
      


}
module.exports = BillingAddress