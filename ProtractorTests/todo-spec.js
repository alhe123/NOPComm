describe('CDBU Modern Software Factory UI Test - nateDevollModernSof-env-preprod Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://msf-preprod.cdbu.io');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.css('[name="submit"]')).click();
    });
});
