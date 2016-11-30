module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://staging.trocafone.com')
      .waitForElementVisible('body', 10)
      .end();
  }
};