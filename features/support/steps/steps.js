const { Given, When, Then } = require('cucumber')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

var GoogleSearch = require('./../pages/google-search')
var GoogleResults = require('./../pages/google-results')


Given('I go to google', async function() {
  return this.visit(GoogleSearch)
})

When(/I search (.*)/, async function(term) {
  return this.on(GoogleSearch, async function(page) {
    await page.query(term)
  })
})

Then('I get results', async function() {
 return this.on(GoogleResults, async function(page) {
    await page.stats.waitUntilPresent()
    expect(page.stats.get()).to.eventually.match(/About/)
  })
})
