module.exports = {

   'partialBuy': function (browser) {
        browser
        .url('https://staging.trocafone.com/comprar/samsung/samsung-grand-prime-3g-duos#424-samsung-grand-prime-3g-duos-8gb-branco-bom-15')
        .waitForElementVisible('input[name=buy_submit]', 1000)
        .click('input[name=buy_submit]')
        .waitForElementVisible('input[name=buy_submit]', 1000)
        .click('input[name=buy_submit]')
        .waitForElementVisible('input[name=buy_submit]', 1000)
        .click('input[name=buy_submit]')
        .setValue('.js-checkout-name input[name=name]', 'Mockity Mocks')
        .setValue('.js-checkout-email input[name=email]', 'test_user_57812159@testuser.com')
        //.setValue('.js-checkout-birthdate input[name=birthdate]', '01-01-2015')
        .execute(
               function() {
                   var birthdate = document.querySelector('.js-checkout-birthdate input[name=birthdate]');
                   birthdate.value="01/01/2015";
               }
         )
        .setValue('.js-checkout-cpf input[name=cpf]', '871.375.668-04')
        .setValue('.js-checkout-phone_number input[name=phone_number]', '361928845578')
        .setValue('.js-checkout-gender select[name=gender]', 'Male')
        .execute(
            function() {
                var cep = document.querySelector('.js-checkout-cep input[name=cep]');
                cep.value="05415-060";
                cep.onchange();
            }
        )
        .pause(1000)
        .waitForElementVisible('.js-checkout-number input[name=number]', 1000)
        .setValue('.js-checkout-number input[name=number]', '12345')
        .click('button.js-stepInformation-submit')
        .pause(1000);
        browser.expect.element('.checkout-box-inactive.js-delivery-input').to.not.be.visible;
        browser
        .click('.js-stepDelivery-submit')
        .pause(10000)
        .end(0);

    }
};




