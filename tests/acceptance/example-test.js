Feature('Example Test');

Scenario('first user can click Google Search', ({ firstUser }) => {
    firstUser.goesToPage('http://www.google.com/');
    firstUser.setsSearch('codeceptjs')
    firstUser.clicksGoogleSearch()
    firstUser.sees('codecept.io')
}).tag('smoke');

Scenario('second user can click Feeling Lucky', ({ secondUser }) => {
    secondUser.goesToPage('http://www.google.com/');
    secondUser.setsSearch('codeceptjs')
    secondUser.clicksFeelingLucky()
    secondUser.seesInCurrentUrl('https://codecept.io')
});
