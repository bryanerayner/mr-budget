import { MrBudgetPage } from './app.po';

describe('mr-budget App', function() {
  let page: MrBudgetPage;

  beforeEach(() => {
    page = new MrBudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
