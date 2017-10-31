describe('CDBU Modern Software Factory UI Test - nateDevollModernSof-env-preprod Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://msf-preprod.cdbu.io');
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});