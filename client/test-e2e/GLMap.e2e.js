'use strict';


const WAIT = 1000;

module.exports = {
  'Credit hrefs should appear on screen'(browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', WAIT)
      .waitForElementVisible('#credits', WAIT)
      .assert.containsText('#credits span:first-of-type', 'Maps Powered By')
      .assert.containsText('#credits a:first-of-type', '© Mapbox')
      .assert.containsText('#credits a:nth-of-type(2)', '© OpenStreetMap')
      .assert.containsText('#credits a:nth-of-type(3)', 'Forecast.io')
      .assert.containsText('#credits a:nth-of-type(4)', '© Weather Underground')
      .end();
  }
};