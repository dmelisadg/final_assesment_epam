const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
//const ErrorPage = require('../pageobjects/error.page')



describe('Testing Login Application', () => {
    beforeEach(
        async () => {
            await LoginPage.open()
        }
    )

    it('UC -1 - Test Login form with empty credentials', async () => {
        await LoginPage.setCredential('standard_user', 'secret_sauce');
        await LoginPage.emptyForm();
        await LoginPage.submitForm();
        const container = LoginPage.mesaggeContainer;
        await browser.waitUntil(
            async () => await container.isDisplayed(), {
                timeout: 10000, interval: 600, timeoutMsg: "not loaded"
            }
        )
        const text = await container.getText()
        expect(text).toHaveTextContaining('Username is required')
    })

    it('UC -2 - Test Login form with credentials by passing Username', async () => {
        await LoginPage.setCredential('standard_user', 'secret_sauce');
        await LoginPage.emptyNameCredential();
        await LoginPage.submitForm();
        const container = LoginPage.mesaggeContainer;
        await browser.waitUntil(
            async () => await container.isDisplayed(), {
                timeout: 10000, interval: 600, timeoutMsg: "not loaded"
            }
        )
        const text = await container.getText()
        expect(text).toHaveTextContaining('Password is required')
    })

    it('UC -3 - Test Login form with credentials by passing Username & Password', async () => {
        await LoginPage.setCredential('standard_user', 'secret_sauce');
        await LoginPage.submitForm();
        const container = LoginPage.title;
        await browser.waitUntil(
            async () => await container.isDisplayed(), {
                timeout: 10000, interval: 600, timeoutMsg: "not loaded"
            }
        )
        const text = await container.getText()
        expect(text).toHaveTextContaining('Swag Labs')
    })
})

