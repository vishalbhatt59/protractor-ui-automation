var loginBase=function(){
var loginPO=require('../pageObject/loginPO.js');
var utilityObj=require('../lib/utility.js')
var dataProvider=require('../lib/dataProvider.js');
   this.login=function(){
	 var dataProviderObj=dataProvider.readDataProvider('../protractor-ui-automation/src/testData/login.json','qa2','login','CS');
	 utilityObj.getUrl('http://adactin.com/HotelApp/');
	 //loginPO.enterUserName('narottamgla');
	// loginPO.enterPassword('chhonkar1989');
	 console.log(dataProviderObj.userName);
	 console.log(dataProviderObj.password);
	 loginPO.enterUserName(dataProviderObj.userName);
	 loginPO.enterPassword(dataProviderObj.password);
	 loginPO.clickLoginButton(); 
	}
}
module.exports = new loginBase();
