class Utils {
  static async typeText(locator, value) {
    const el = $(locator);
    await el.setValue(value);
  }
  static async clickOnElement(locator) {
    const el = $(locator);
    await el.click();
  }
  static async getData() {
    const el=$(locator)
    await el.getText()
  }
  static async waitForElement(locator ,timeOut) {
    const el = $(locator)
    return el.getText(timeOut)
  }
  static async waitForElement(locator ,timeOut) {
    const el =$(locator)
    await el.waitForDisplayed(timeOut)
  }
  static async pause(time) {
    
    await browser.pause(time)
  }
  static async browserScroll() {
    await browser.scroll()
  }
  static async browserMaximize() {
    await browser.maximizeWindow()
  }
 

  
}
module.exports = Utils