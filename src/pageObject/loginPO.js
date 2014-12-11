var loginPO=function(){
	var userName=element(by.id("username"));
	var password=element(by.id("password"));
	var loginButton=element(by.id("login"));
	
	this.enterUserName=function(user){
		userName.clear();
		userName.sendKeys(user);
	}
	
	this.enterPassword=function(pass){
		password.clear();
		password.sendKeys(pass);
	}
	
	this.clickLoginButton=function(){
		loginButton.click();
	}
}
module.exports = new loginPO();
