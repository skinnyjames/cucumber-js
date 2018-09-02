const { Given, When, Then } = require('cucumber')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

Given('I go to google', async function() {
  await this.searchPage.visit()
})

When(/I search (.*)/, async function(term) {
  await this.searchPage.query(term)
})

Then('I get results', async function() {
  await this.resultsPage.stats.waitUntilPresent()
  expect(this.resultsPage.stats.get()).to.eventually.match(/About/)
})
