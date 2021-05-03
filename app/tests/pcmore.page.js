import { Selector } from 'testcafe';

class PcmorePage {
  constructor() {
    this.pageId = '#pcmore';
    this.pageSelector = Selector(this.pageId);
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const pcmorePage = new PcmorePage();
