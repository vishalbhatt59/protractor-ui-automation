var utility=function(){

this.getUrl=function(url){
	var protact=protractor.getInstance();
	browser.manage().deleteAllCookies();
	protact.manage().window().maximize();
	protact.get(url);
	}	
}
module.exports = new utility();
