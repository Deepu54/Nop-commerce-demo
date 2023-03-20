const utils = require("../specs/utils");
const dataInp = require("../../testConfig.json");
const { emailID } = require("./register.page");

//Locators
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
const _Continue1 = '(//button[text()="Continue"])[1]';
const _Continue2='[class="button-1 shipping-method-next-step-button"]'
const _creditCard='[id="paymentmethod_1"]'
const _Continue3='(//button[text()="Continue"])[3]'
const _paymentMethod='[id="paymentmethod_1"]'
const _creditCardType='[id="CreditCardType"]'
const _Continue4='[class="button-1 payment-method-next-step-button"]'
const _cardHolderName='[id="CardholderName"]'
const _cardnumber='[id="CardNumber"]'
const _ExpireMonth='[id="ExpireMonth"]'
const _ExpireYear='[id="ExpireYear"]'
const _cardCode='[id="CardCode"]'
const _Continue5='[class="button-1 payment-info-next-step-button"]'
const _confirm='[class="button-1 confirm-order-next-step-button"]'


class BillingPayment {
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
  static async Continue1() {
    await utils.clickOnElement(_Continue1);
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
    await this.Continue1();
    await utils.pause(3000)
  }
  static async continue2() {
    await utils.clickOnElement(_Continue2)
  
  }
  static async Continue3() {
    await utils.clickOnElement(_Continue3)
  }
  static async paymentMethod() {
    await utils.clickOnElement(_paymentMethod)
  }
  static async Continue4() {
    await utils.clickOnElement(_Continue4)
  }
  static async CreditCardsType() {
    await $(_creditCardType).selectByVisibleText("Discover")
  }
  static async CardHolderName() {
    await utils.typeText(_cardHolderName,dataInp.firstName,dataInp.lastEmail)
  }
  static async CardHolderNumber() {
    await utils.typeText(_cardnumber,dataInp.card)
  }
  
  static async ExpirationMonth() {
    await $(_ExpireMonth).selectByIndex("10");
  }
  static async ExpirationYear() {
    await $(_ExpireYear).selectByIndex("10")
  }
  static async CardCode() {
    await utils.typeText(_cardCode,dataInp.cvv)
  }
  static async Continue5() {
    await utils.clickOnElement(_Continue5)
  }
  static async Confirm(){
    await utils.clickOnElement(_confirm)
  }
  


   
}

module.exports = BillingPayment;
