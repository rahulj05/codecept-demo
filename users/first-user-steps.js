// in this file you can append custom step methods to 'I' object
const GooglePageActions = require('./../actions/google-page-actions');

module.exports = function() {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.
        setsSearch: (value) => {
            GooglePageActions.setSearch(value)
        },

        clicksGoogleSearch: () => {
            GooglePageActions.clickGoogleSearch()
        }
    });
}
