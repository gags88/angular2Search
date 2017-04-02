import { UtilityPage } from './app.po';

describe('utility App', () => {
  let page: UtilityPage;

  beforeEach(() => {
    page = new UtilityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
