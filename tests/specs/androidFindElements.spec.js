describe('Find elements in Android application', () => {
    it('Find elements by Accessibility ID', async () => {
        const app = await $('~App');
        await app.click();
        const actionbar = await $('~Action Bar');

        await expect(actionbar).toBeExisting();
    })

    it('Find elements by Class name', async () => {
        const accessibility = await $('android.widget.TextView');

        await expect(accessibility).toHaveText("API Demos");
    })
})