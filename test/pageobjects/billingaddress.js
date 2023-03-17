const utils = require('..//specs/utils')
const dataInp=require('..//..//testConfig.json')
const { util } = require('chai')

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
const _Continue ='(//button[text()="Continue"])[1]'

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
    static async Address() {
        await utils.typeText(_address,dataInp.Address)
    }
    
    static async postal() {
        await utils.typeText(_zipCode,dataInp.postalcode)
    }
    static async phoneNum() {
        await utils.typeText(_phoneNumber,dataInp.phonenumber)
    }
    static async Continue() {
        await utils.clickOnElement(_Continue)
    }
}

class Billing{
    static async Bills(){
        await BillingAddress.Firstname()
        await BillingAddress.lastName()
        await BillingAddress.Email()
        await BillingAddress.company()
        await BillingAddress.country()
        await BillingAddress.city()
        await BillingAddress.Address()
        await BillingAddress.postal()
        await BillingAddress.phoneNum()
        await BillingAddress.Continue()
    }


}
module.exports = BillingAddress