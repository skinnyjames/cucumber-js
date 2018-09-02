const PageObject = require('page-object')

function GoogleSearch(driver) {

  this.setDriver(driver)
  this.setUrl('http://www.google.com')
  this.textField('terms', {name: 'q'})
  this.submit('google')
  this.submit('feelingLucky', {index: 1})

  this.query = async function(query) {
    await this.terms.waitUntilPresent()
    await this.terms.set(query)
    await this.driver.executeScript("document.getElementById('viewport').click()")
    await this.google.waitUntilPresent(5000, 'button not found')
    return this.google.click()
  }

  return this
}

PageObject(GoogleSearch)
module.exports = GoogleSearch
