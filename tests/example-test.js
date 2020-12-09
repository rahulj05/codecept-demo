Feature('Example Test');

Scenario('first user can click Google Search', ({ firstUser }) => {
    firstUser.amOnPage('http://www.google.com/');
    firstUser.setsSearch('codeceptjs')
    firstUser.clicksGoogleSearch()
    firstUser.see('codecept.io')
});

Scenario('second user can click Feeling Lucky', ({ secondUser }) => {
    secondUser.amOnPage('http://www.google.com/');
    secondUser.setsSearch('codeceptjs')
    secondUser.clicksFeelingLucky()
    secondUser.seeInCurrentUrl('https://codecept.io')
});