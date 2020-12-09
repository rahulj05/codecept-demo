const { I } = inject();
const GooglePage = require('./../pages/google-page');

module.exports = {
    setSearch(value) {
        I.fillField({css: GooglePage.searchCss}, value);
    },

    clickGoogleSearch() {
        I.click(GooglePage.googleSearchText)
    },

    clickFeelingLucky() {
        I.click(GooglePage.feelingLuckyText)
    }
};
