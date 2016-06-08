import { AssurePage } from './app.po';

describe('assure App', function() {
  let page: AssurePage;

  beforeEach(() => {
    page = new AssurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('assure works!');
  });
});
