const { setWorldConstructor } = require('cucumber')
const webdriver = require('selenium-webdriver')
const driver = new webdriver.Builder().forBrowser('chrome').build()

var GoogleSearch = require('./pages/google-search')
var GoogleResults = require('./pages/google-results')

function CustomWorld() {
  this.driver = driver
  this.searchPage = new GoogleSearch(driver)
  this.resultsPage = new GoogleResults(driver)
}
setWorldConstructor(CustomWorld)
