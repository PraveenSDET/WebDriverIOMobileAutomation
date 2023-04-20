// describe('Find elements in Android application', () => {
//     // it('Find elements by Accessibility ID', async () => {
//     //     const app = await $('~App');
//     //     await app.click();
//     //     const actionbar = await $('~Action Bar');

//     //     await expect(actionbar).toBeExisting();
//     // })

//     // it('Find elements by Class name', async () => {
//     //     const accessibility = await $('android.widget.TextView');

//     //     await expect(accessibility).toHaveText("API Demos");
//     // })

//     // it('Find elements by Xpath', async () => {
//     //     // await $('~App').click();
//     //     await $('//android.widget.TextView[@text="Alert Dialogs"]').click()
//     //     await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
//     //     await $('//android.widget.TextView[@text="Command two"]').click()
//     //     await expect(await $('//android.widget.TextView')).toHaveText('You selected: 1 , Command two')
//     // })

//     // it('Find multiple elements using $$', async ()=> {
//     //     const elementList = []
//     //     const elements = await $$('android.widget.TextView')
//     //     for (const element of elements) {
//     //         elementList.push(await element.getText())
//     //     }
//     //     for (const element of elementList) {
//     //         console.log(element)
//     //     }
//     // })

//     it('Find element using UI Selector', async ()=> {
//         await $('android=new UiSelector().text("Preference")').click();
//     })
// })