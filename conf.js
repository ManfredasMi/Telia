exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['task.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    }
};
