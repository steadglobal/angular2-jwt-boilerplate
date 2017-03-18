import { Angular2JwtBoilerplatePage } from './app.po';

describe('angular2-jwt-boilerplate App', function() {
  let page: Angular2JwtBoilerplatePage;

  beforeEach(() => {
    page = new Angular2JwtBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
