import { CryptoAppPage } from './app.po';

describe('crypto-app App', () => {
  let page: CryptoAppPage;

  beforeEach(() => {
    page = new CryptoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
