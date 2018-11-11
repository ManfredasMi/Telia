browser.waitForAngularEnabled(false);

describe('Test', function() {
    it('will check telia webpages functionality', function() {
        let EC = protractor.ExpectedConditions;

        browser.get('http://www.telia.lt/');
        browser.manage().window().maximize();
        browser.findElement(By.css('.self-service')).click();
        browser.findElement(By.css('a.btn.btn-secondary[href="/mano/sso"]')).click();
        browser.findElement(By.css('.link__inline')).click();
        browser.findElement(By.css('[type="email"]')).sendKeys('vardenissd@gmail.com');
        browser.findElement(By.css('[type="submit"]')).click();
        browser.wait(EC.presenceOf($('[href="https://mail.google.com"]')), 10000);
        browser.findElement(By.css('[href="https://mail.google.com"]')).click();

        // istrinti
        // browser.get('http://www.gmail.com/');
        // browser.manage().window().maximize();
        // iki cia sita dali
        browser.findElement(By.css('[type="email"]')).sendKeys('vardenissd@gmail.com');
        browser.wait(EC.presenceOf($('#identifierNext')), 10000);
        browser.findElement(By.css('#identifierNext')).click();
        browser.sleep(2000);
        browser.findElement(By.css('[type="password"]')).sendKeys('LabaDiena12');
        browser.findElement(By.css('#passwordNext')).click();
        // wait for email to arrive
        browser.wait(EC.presenceOf($('[email="noreply@telia.lt"]')), 150000);
        let list = $$('[email="noreply@telia.lt"]');
        list.get(1).click();
        browser.wait(EC.presenceOf($('[href*="http://informing.mailer.telia.lt/links/view/"]')), 10000);
        let list1 = $$('[href*="http://informing.mailer.telia.lt/links/view/"]');
        list1.get(1).click();
        // switching to another pop up window
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]).then(function() {
              browser.wait(EC.presenceOf($('[type="password"]')), 10000); // neranda sito elemento
              browser.findElement(By.css('[type="password"]')).sendKeys('LabaDiena123');
              browser.findElement(By.css('.checkbox__content')).click();
              browser.findElement(By.css('.btn.btn-primary')).click();
              browser.findElement(By.css('.btn.btn-primary')).click();
              browser.findElement(By.cssContainingText('span', 'Uždaryti')).click();
            });
        });


    });
});
