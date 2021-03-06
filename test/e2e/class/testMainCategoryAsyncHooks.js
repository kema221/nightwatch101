module.exports = {
  '@tags': ['class'],
  before: function(browser) {
    console.log('Setting up...');
  },
  after: function(browser) {
    console.log('Closing down...');
  },
  beforeEach: function(browser, done) {
    console.log('Before each test case...');

    // performing an async operation
    setTimeout(function() {
      // finished async duties
      // done(new Error('這是客製化報錯喔!'));
      done();
    }, 100);
  },
  afterEach: function(browser, done) {
    console.log('After each test case...');

    // performing an async operation
    setTimeout(function() {
      // finished async duties
      // done(new Error('這是客製化報錯喔!'));
      done();
    }, 200);
  },
  'Assert Ruten MainCategory Title 0008': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-flagship .rt-ad-heading').text.to.equal('露天旗艦店');
    browser.end();
  },
  'Assert Ruten MainCategory Title 0011': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0011');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-flagship .rt-ad-heading').text.to.equal('露天旗艦店');
    browser.end();
  }
}