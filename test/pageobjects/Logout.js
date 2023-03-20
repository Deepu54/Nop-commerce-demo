const utils=require('..//specs/utils')
const _Logout='[class="ico-logout"]'

class Logout{
    static async Logout() {
        await utils.clickOnElement(_Logout)
    }
}
module.exports= Logout