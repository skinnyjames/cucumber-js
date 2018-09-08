const ScreenPill = require('screen-pill')

function GoogleSearch(driver) {

  this.setDriver(driver)
  this.directUrl('http://www.google.com')
  this.textField('terms', {name: 'q'})
  this.submit('google')
  this.submit('feelingLucky', {index: 1})

  this.query = async function(query) {
    await this.terms.waitUntilPresent()
    await this.terms.set(query)
    await this.google.waitUntilPresent()
    return this.google.click()
  }

  return this
}

module.exports = ScreenPill(GoogleSearch)
