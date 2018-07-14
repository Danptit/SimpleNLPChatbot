//require the express nodejs module
var vntk = require('vntk');
var pos_tag = vntk.posTag();
var ner = vntk.ner();

var express = require('express'),
	//set an instance of exress
	app = express(),
	//require the body-parser nodejs module
	bodyParser = require('body-parser'),
	//require the path nodejs module
	path = require("path");
	
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /form route is requested
app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');
	switch(req.body.lastName){

		case "NER":
		   var res1 = ner.tag(req.body.firstName);
		 //  var res2 = res1.filter(v=>v[v.length-1].match("LOC"));
		   //var output = res2.map(x=>x[0]);
		   setTimeout(function(){

				res.send(JSON.stringify({
					result: res1 || null,
					command: req.body.lastName || null
				}));
		
			}, 1000)
		   break;
		case "POS":
		   var res1 = pos_tag.tag(req.body.firstName);
		   setTimeout(function(){

				res.send(JSON.stringify({
					result: res1 || null,
					command: req.body.lastName || null
				}));
		
			}, 1000)
		   break;   
		   
		   
	}
});	
	//debugging output for the terminal
	

	
//wait for a connection
app.listen(process.env.PORT, function(){
	console.log("Started on PORT ");
  })