import { BrastlewarkPage } from './app.po';

describe('brastlewark App', () => {
  let page: BrastlewarkPage;

  beforeEach(() => {
    page = new BrastlewarkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
