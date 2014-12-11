describe('Dummy Page Homepage', function() {
	var loginBase=require('../base/loginBase.js');
	var customLogger=require('../lib/customLogger.js');
	var loggers=customLogger.logger("LoginTest");
	
	beforeEach(function () {
		var protact=protractor.getInstance();
		isAngularSite(false);
	    });
	
  it('Login to Dummy site', function() {
	  loggers.info("Login to dummy website....");
	  loginBase.login();
	  loggers.info("Narottam With yogita billi")
  });
});