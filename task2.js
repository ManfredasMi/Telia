browser.waitForAngularEnabled(false);

describe('Test', function() {
    it('will check password recovery', function() {
        browser.get('http://www.sportsdirect.com/');
        browser.findElement(By.css('div.modal-header button.close')).click();
        browser.findElement(By.css('span.hidden-xs')).click();
        browser.findElement(By.css('.ForgotPasswordLinkButton')).click();
        browser.findElement(By.css('input[type="Email"]')).sendKeys('vardenissd@gmail.com');
        browser.findElement(By.css('.EmailRequestSubmit')).click();
        // In this place because of reCAPTCHA we go directly to gmail site, e.g.if we were application developers
        // we would have reCAPTCHA's key to bypass I'm not a robot check
        browser.get('http://www.gmail.com/');
        browser.findElement(By.css('.gmail-nav__nav-link.gmail-nav__nav-link__sign-in')).click();
        browser.findElement(By.css('[type="email"]')).sendKeys('vardenissd@gmail.com');
        browser.findElement(By.css('#identifierNext')).click();
        browser.sleep(2000);
        browser.findElement(By.css('[type="password"]')).sendKeys('LabaDiena12');
        browser.findElement(By.css('#passwordNext')).click();
        browser.sleep(8000);
        browser.findElement(By.cssContainingText('.bog', 'Sports Direct Lithuania - Forgotten Password')).click();
        browser.sleep(4000);
        browser.findElement(By.css('[href*="https://lt.sportsdirect.com/Login/PasswordReset"]')).click();

        // Switching to new url and testing if the password has been successfully changed
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]).then(function() {
                let list = $$('.dnnFormItem [type="password"]');
                list.get(0).sendKeys('Sveikas123');
                list.get(1).sendKeys('Sveikas123');
                browser.findElement(By.css('.submitWrap')).click();

                // Checks if changed password element is visible and if test has passed
                var changedPasswordText = element(By.css('.chgpasswordpara'));
                expect(changedPasswordText.isDisplayed()).toBe(true);
                console.log("Yout password has been changed successfully!");
            });
        });
    });
});
