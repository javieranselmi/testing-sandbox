module.exports = {

  'Search \'samsung\'' : function (browser) {
    browser
        .url('https://staging.trocafone.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[name=q].search-box__input', 'samsung')
        .click('button[type=submit].search-box__button')
        .waitForElementVisible('div.results.js-scrollable-listing', 1000)
        .click('.js-product-box-container:first-child')
        .waitForElementVisible('input[name=buy_submit]', 1000)
        .click('input[name=buy_submit]')
        .waitForElementVisible('input[name=buy_submit]', 1000)
        .click('input[name=buy_submit]')
        .waitForElementVisible('input[name=buy_submit]', 1000)
        .click('input[name=buy_submit]')
        .setValue('.js-checkout-name input[name=name]', 'Mockity Mocks')
        .setValue('.js-checkout-email input[name=email]', 'test_user_57812159@testuser.com')
        .setValue('.js-checkout-birthdate input[name=birthdate]', '10/09/1990')
        .setValue('.js-checkout-cpf input[name=cpf]', '46.276.537')
        .setValue('.js-checkout-phone_number input[name=phone_number]', '361928845578_')
        .setValue('.js-checkout-gender select[name=gender]', 'Male')
        .pause(3000)
        .end();
  }
};



    /*elements: {
        searchBar: {
            selector: 'input[type=text]'
        },
        submit: {
            selector: '//[@name="q"]',
            locateStrategy: 'xpath'
        }
    }*/