const ScreenPill = require('screen-pill')

function GoogleSearchResults(driver) {
  this.setDriver(driver)
  this.div('stats', {css: '#resultStats', partialLinkText: 'About'})

  return this
}

ScreenPill(GoogleSearchResults)

module.exports = GoogleSearchResults
