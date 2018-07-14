var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var vntk = require('vntk');
var pos_tag = vntk.posTag();
var ner = vntk.ner();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/index.html',function(req,res){
  res.sendFile(__dirname + "/" +"index3.html");
});
app.post('/login',function(req,res){
  var inputText = req.body.textObj;
  var inputCommand = req.body.commandObj;
  res.setHeader('Content-Type', 'application/json');
  setTimeout(function() {
    res.send(JSON.stringify({
      inputTXT: inputText
    }));
  }, 3000);

  
  
  <
  
  switch(inputCommand){
    case "NER":
       var res1 = ner.tag(inputText);
       var res2 = res1.filter(v=>v[v.length-1].match("LOC"));
       var output = res2.map(x=>x[0]);
       console.log("output: " + output);
   
       res.json({"IP adress": req.ip,"status": "successfull", "inputFile": inputText, "result": output, "error": "null"});
       break;
       
    case "POS":
       var res1 = pos_tag.tag(inputText);
       res.json({"IP adress": req.ip,"status": "successfull", "inputFile": inputText, "result": res1, "error": "null"});
           
            break;
     default: 
       app.get('/', function(req, res){
           res.json({"IP adress": req.connection.remoteAddress,"status": "Unsuccessfull", "inputFile": obj2, "result": res1, "error": "No command found "});
        })   
        break;    

         
       
}
});

app.listen(process.env.PORT, function(){
  console.log("Started on PORT ");
})