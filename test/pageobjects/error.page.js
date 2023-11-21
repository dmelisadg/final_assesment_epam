const { $ } = require('@wdio/globals')
const Page = require('./page');



class SecurePage extends Page {
    get mesaggeContainer() {
        return $('.error-message-container').$('.error');
    }

    async getMessage (){
        await (await this.mesaggeContainer).getText()
    }
}

module.exports = new SecurePage();
