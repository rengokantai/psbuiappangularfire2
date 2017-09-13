import { Psbuiappangularfire2Page } from './app.po';

describe('psbuiappangularfire2 App', () => {
  let page: Psbuiappangularfire2Page;

  beforeEach(() => {
    page = new Psbuiappangularfire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
