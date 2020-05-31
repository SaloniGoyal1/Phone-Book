const services = require('./services');
const express = require('express')
const app = express()
const bodyParser=require('body-parser');

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.post('/addcontacts', function(req, res){
console.log(req.body);
services.dbinsert('insert into contacts values(?,?,?,?)', [req.body.name, req.body.dob, req.body.numberinput, req.body.emailsinput], function(finalresult){});
res.send({data : 'Successful', Status : '200'});
});
app.get('/showdetails', function(req, res){
  console.log('Required');
  console.log(req.body);
  res.sendfile('showdetails.html');
});
app.get('/editcontact.html', function(req, res){
  console.log('Required');
  console.log(req.body);
  res.sendfile('editcontact.html');
});
app.get('/getdetails', function(req, res){
  var url = req.url;
  var phonenumber = url.split("?")[1];
  services.dbinsert('select * from contacts where number = ?', [phonenumber], function(finalresult){
    console.log(finalresult);
    res.send(finalresult);
  });
});
app.get('/fetchAllContacts', function(req, res){
services.dbquery('select * from contacts', function(finalresult){
res.send(finalresult);
});
});
app.get('/fetchdata', function(req, res){
  services.dbquery('select * from contacts', function(finalresult){
  res.send(finalresult);
});
});
app.get('/addcontact.html', function(req, res){
console.log('Required');
console.log(req.body);
res.sendfile('addcontact.html');
});
app.get('/', function(req, res){
  console.log('Required');
  console.log(req.body);
  res.sendfile('index.html');
  });
app.listen(80);