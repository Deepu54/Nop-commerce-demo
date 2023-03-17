const utils = require("..//specs/utils");
const dataInp = require("..//..//testConfig.json");
const { util } = require("chai");
const { emailID } = require("./register.page");
const register = require('../pageobjects/register.page')


const _firstName = '[id="BillingNewAddress_FirstName"]';
const _lastName = '[id="BillingNewAddress_LastName"]';
const _email = '[id="BillingNewAddress_Email"]';
const _company = '[id="BillingNewAddress_Company"]';
const _country = '[id="BillingNewAddress_CountryId"]';
const _city = '[id="BillingNewAddress_City"]';
const _address = '[id="BillingNewAddress_Address1"]';
const _zipCode = '[name="BillingNewAddress.ZipPostalCode"]';
const _phoneNumber = '[id="BillingNewAddress_PhoneNumber"]';
const _billingAddress ='(//button[@class="button-1 new-address-next-step-button"])[1]';
const _Continue = '(//button[text()="Continue"])[1]';
const _Continue2='(//button[text()="Continue"])[2]'
const _creditCard='[id="paymentmethod_1"]'
const _Continue3='(//button[text()="Continue"])[3]'
const _creditCardType='[id="CreditCardType"]'

class BillingAddress {
  static async Firstname() {
    await utils.typeText(_firstName, dataInp.Firstname);
  }
  static async lastName() {
    await utils.typeText(_lastName, dataInp.lastName);
  }
  static async Email(recentEmail) {
    await utils.typeText(_email,dataInp.firstEmail+recentEmail+dataInp.lastEmail);
  }
  static async company() {
    await utils.typeText(_company, dataInp.company);
  }
  static async country() {
    await $(_country).selectByIndex(133);
  }
  static async city() {
    await utils.typeText(_city, dataInp.city);
  }
  static async Address() {
    await utils.typeText(_address, dataInp.Address);
  }

  static async postal() {
    await utils.typeText(_zipCode, dataInp.postalcode);
  }
  static async phoneNum() {
    await utils.typeText(_phoneNumber, dataInp.phonenumber);
  }
  static async Continue() {
    await utils.clickOnElement(_Continue);
  }

  static async Bills(recentEmail) {
    await this.lastName();
    await this.Email();
    await this.company();
    await this.country();
    await this.city();
    await this.Address();
    await this.postal();
    await this.phoneNum();
    await this.Continue();
  }
  static async continue2() {
    await utils.clickOnElement(_Continue2)
  }
  static async creditcard() {
    await $(_creditCard).selectByVisibleText(Discover)
  }
  static async Continue3() {
    await utils.clickOnElement(_Continue3)
  }
   
//    static async Cards() {
//     await $(_creditCardType).selectByIndex(dataInp.)
//   }
}

module.exports = BillingAddress;
