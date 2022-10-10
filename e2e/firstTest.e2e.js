describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should show hello screen', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
