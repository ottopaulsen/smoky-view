import { SmokyViewPage } from './app.po';

describe('smoky-view App', function() {
  let page: SmokyViewPage;

  beforeEach(() => {
    page = new SmokyViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
