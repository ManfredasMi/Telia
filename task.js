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
        browser.findElement(By.css('[type="email"]')).sendKeys('vardenissd@gmail.com');
        browser.findElement(By.css('#identifierNext')).click();
        browser.wait(EC.presenceOf($('[type="password"]')), 10000);
        browser.findElement(By.css('[type="password"]')).sendKeys('LabaDiena12');
        browser.findElement(By.css('#passwordNext')).click();
        browser.wait(EC.presenceOf($('[email="noreply@telia.lt"]')), 60000);
        browser.findElement(By.css('[email="noreply@telia.lt"]')).click();
        browser.wait(EC.presenceOf($('[href*="http://informing.mailer.telia.lt/links/view/"]')), 10000);
        browser.findElement(By.css('[href*="http://informing.mailer.telia.lt/links/view/"]')).click();

        browser.sleep(10000);
    });
});
