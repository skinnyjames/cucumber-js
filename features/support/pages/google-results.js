const PageObject = require('page-object')

function GoogleSearchResults(driver) {
  this.setDriver(driver)
  this.div('stats', {css: '#resultStats', partialLinkText: 'About'})

  return this
}

PageObject(GoogleSearchResults)

module.exports = GoogleSearchResults
