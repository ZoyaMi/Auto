exports.config = {
seleniumAddress: 'http://localhost:4444/wd/hub',

capabilities: {
'browserName': 'chrome'
},

specs: ['features/*.js'],

onPrepare: function () {
browser.driver.manage().window().setSize(1600, 1000);
},

jasmineNodeOpts: {
showColors: true
}
};