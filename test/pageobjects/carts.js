const utils = require('../specs/utils')
let date = new Date().getTime()

const _Cart='(//button[@class="button-2 product-box-add-to-cart-button"])[1]'
const _AddToCart="(//button[@id='add-to-cart-button-14'])[1]"
const _shoppingCart='//a[text()="shopping cart"]'
const _termsConditions ='[id="termsofservice"]'
const _checkOut='[id="checkout"]'



class Cart {
    static async cart() {
        await utils.clickOnElement(_Cart)
    }
    static async addToCart() {
        await utils.clickOnElement(_AddToCart)
    }
    static async ShoppingCart() {
        await utils.clickOnElement(_shoppingCart)
    }
    static async TermsConditions() {
        await utils.clickOnElement(_termsConditions)
    }
    static async checkOut() {
        await utils.clickOnElement(_checkOut)
    }
   

}
module.exports =Cart