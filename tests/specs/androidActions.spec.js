describe('Validate common actions in Android', () => {
    it('Validate typing text in text box', async () => {
        await $('~Views').click()
        await $('~Auto Complete').click()
        await $('//android.widget.TextView[@resource-id="android:id/text1"]').click()
        await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]').setValue("United Kingdom")
        await $('//android.widget.Button[@content-desc="Give me Focus"]').click()
        await expect ($('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]')).toHaveText("United Kingdom")
    })
    it('Validate accessing specific page using App Activity and handle alerts', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(5000)
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        await driver.acceptAlert()
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist()
    })
    it('Validate vertical scrolling', async () => {
        await $('~App').click()
        await $('~Activity').click()
        // await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos")
        // await ('android=new UIScrollable(new UISelector().scrollable(true)).scrollToEnd(1,5)')
        await $('~QuickContactsDemo').click()
    })
})