const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputForm () {
        return $$('#login_button_container .login-box')
    }

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('.submit-button.btn_action');
    }

    get mesaggeContainer () {
        return $('.error-message-container');
    }

    get title () {
        return $('.app_logo')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async setCredential (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async emptyForm () {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }
    async emptyNameCredential () {
        await this.inputUsername.clearValue();
    }

    async submitForm () {
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new LoginPage();
