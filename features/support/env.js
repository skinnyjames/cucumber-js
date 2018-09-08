const { setWorldConstructor, setDefaultTimeout } = require('cucumber')
const webdriver = require('selenium-webdriver')
const driver = new webdriver.Builder().forBrowser('chrome').build()
const PillFactory = require('screen-pill/dist/pill-factory')

setDefaultTimeout(15000)

function CustomWorld() {
  this.driver = driver
}

let World = PillFactory(CustomWorld)
setWorldConstructor(World)
