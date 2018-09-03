const { setWorldConstructor } = require('cucumber')
const webdriver = require('selenium-webdriver')
const driver = new webdriver.Builder().forBrowser('chrome').build()
const PageFactory = require('screen-pill/page-factory')

function CustomWorld() {
  this.driver = driver
  Object.assign(this, PageFactory)
}

setWorldConstructor(CustomWorld)
