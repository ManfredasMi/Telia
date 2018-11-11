browser.waitForAngularEnabled(false);

describe('Starting test', function() {
    it('Checking price range', function() {
        browser.get('http://www.sportsdirect.com/');
        browser.findElement(By.css('div.modal-header button.close')).click();
        browser.findElement(By.css('a[href="/mens"]')).click();
        browser.findElement(By.css('a[href="/running/running-shoes/mens-running-shoes/mens-runners?promo_name=landing-mens"]')).click();
        browser.findElement(By.css('span[data-item="ABRA^Karrimor"]')).click();
        browser.findElement(By.css('input#PriceFilterTextEntryMin')).sendKeys('20');
        browser.findElement(By.css('input#PriceFilterTextEntryMax')).sendKeys('40');
        browser.findElement(By.css('input#PriceFilterTextEntryApply')).click();

        // Will make two different tests, on the first part of the test I will sort the price range Low to High
        // and check if the lowest price is not less than 20 euros
        browser.findElement(By.css('.dropprods_Order > option:nth-child(5)')).click();
        browser.sleep(2000);
        price = browser.findElement(By.css(".CurrencySizeLarge.curprice.productHasRef"));
        price.getText().then(function(text) {
            var x = parseFloat(text);
            if (x >= 20) {
                console.log("Test has passed and the price is not less than 20 euros. The price is: " + x + " euros");
            } else {
                console.log("Test failed");
            }
        });

        // On the second part I will sort the price range from High to Low and will check if the highest price
        // is not bigger than 40 euros
        browser.findElement(By.css('.dropprods_Order > option:nth-child(6)')).click();
        browser.sleep(2000);
        price = browser.findElement(By.css(".CurrencySizeLarge.curprice.productHasRef"));
        price.getText().then(function(text) {
            var x = parseFloat(text);
            if (x <= 40) {
                console.log("Test has passed and the price is not higher than 40 euros. The price is: " + x + " euros");
            } else {
                console.log("Test failed");
            }
        });
    });
});
