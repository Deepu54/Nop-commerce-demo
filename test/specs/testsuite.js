const registerPage = require('../pageobjects/register.page')
const homePage = require('../pageobjects/home.page')
const loginPage = require('../pageobjects/login.page')
const Logout =require('..//pageobjects/Logout')
const utils = require('../specs/utils')
const dataInp = require('../../testConfig.json')
const Homepage = require('../pageobjects/home.page')
const Cart = require('../pageobjects/carts')
const { cart } = require('../pageobjects/carts')
const Orderdetails = require('../pageobjects/Orderdetails')
const Billing= require('../pageobjects/billing&payment')
const BillingPayment = require('../pageobjects/billing&payment')
const order = require('../pageobjects/Orderdetails')
let date = new Date().getTime()
const recentEmail = date

describe('Demo Nop Commerce Registration',async function(){
    

    it('should open the correct website ', async function() 
    {
        await utils.browserMaximize()
        await browser.url(dataInp.baseUrl)
    })
    
    it('should be able to register an account sucessfully', async ()=> 
    {
        await homePage.registerButton()
        await registerPage.firstname()
        await registerPage.lastName()
        await registerPage.birthday().selectByIndex(28)
        await registerPage.birthMonth().selectByIndex(8)
        await registerPage.birthYear().selectByIndex(88)
        await registerPage.emailID(recentEmail)
        await registerPage.password()
        await registerPage.confirmPassword()
        await registerPage.submitButton()
        

    })   
})

describe('Nop commerce Login',async function() 
 {
     it('logging in to the account', async function() 
     {
         await homePage.loginButton()
         await loginPage.loginEmail(recentEmail)
         await loginPage.loginPassword()
         await loginPage.loginSubmit()
         

        
     })

 })

describe('Nop commeerce shopping',async function(){

    it('user should be able to search for product adn add to cart',async function() {
        await homePage.searchButton()
        await homePage.clicked()
        await utils.browserScroll(0,1200)
        await utils.pause(5000)
        await Cart.cart()
        await utils.pause(5000)
        await utils.browserScroll(0,1000)
    })
})


describe('Nop commerce cart', async function() {

    it('user should be able to add products to cart', async function(){

    
        await Cart.addToCart()
        await utils.pause(4000)
        await Cart.ShoppingCart()
        await utils.browserScroll(0,400)
        await Cart.TermsConditions()
        await Cart.checkOut()
        await utils.pause(2000)
        

        
    })
 })
describe('Nop commerce billing and shipping', async function() {
    it('user should be able to add the billing and shipping address & payment', async function(){
        await BillingPayment.Bills(recentEmail)
        await BillingPayment.Continue3()
        await BillingPayment.paymentMethod()
        await BillingPayment.Continue4()
        await BillingPayment.CreditCardsType()
        await BillingPayment.CardHolderName()
        await BillingPayment.CardHolderNumber()
        await BillingPayment.ExpirationMonth()
        await BillingPayment.ExpirationYear()
        await BillingPayment.CardCode()
        
        await BillingPayment.Continue5()
        await utils.pause(4000)
        await utils.browserScroll(0,2000)
        await BillingPayment.Confirm()
        await utils.pause(3000)
        
        
    }) 
})
describe('Nop commerce Order details',async function() {
    it('user should be able get his order details & download Invoice ',async function() {
        await order.OrderInfo()
        await utils.pause(2000)
        await order.Invoice()
})

    })

describe('Nop commerce Logout',async function(){
    it('user should be able to Logout of the application',async function() {
        await Logout.Logout()

    })
})
    


















 



