export class AssurePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('assure-app h1')).getText();
  }
}
