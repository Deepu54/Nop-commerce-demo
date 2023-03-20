const utils = require('../specs/utils')
const _OrderInfo='[href="/orderdetails/1031"]'
const _DownloadInvoice='[class="button-2 pdf-invoice-button"]'

class order{
    static async OrderInfo() {
        await utils.clickOnElement(_OrderInfo)
    }
    static async Invoice() {
        await utils.clickOnElement(_DownloadInvoice)
    }
}
module.exports = order
