var dataProvider=function(){
this.readDataProvider=function(filePath,filter1,filter2,filter3){
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(filePath, 'utf8')); 
result=obj[filter1][filter2][filter3];
return result;
}

this.writeDataProvider=function(filePath,filter1,filter3,filter3,key,value){
var fs    = require('fs'),
      nconf = require('nconf');

	  nconf.argv()
       .env()
       .file({ file: filePath });
	   
	    nconf.set(filter1+":"+filter2+":"+filter3+":"+key, value);
	   
	 nconf.save(function (err) {
    fs.readFile(filePath, function (err, data) {
      console.dir(JSON.parse(data.toString()))
    });
  });
}
}
module.exports = new dataProvider();