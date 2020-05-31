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
app.post('/', function(req, res){
console.log(req.body);
services.dbinsert('insert into contacts values(?,?,?,?)', [req.body.name, req.body.dob, req.body.number, req.body.email], function(finalresult){});

res.send({data : 'Successful', Status : '200'});
});

app.get('/fetchAllContacts', function(req, res){
services.dbquery('select * from contacts', function(finalresult){
res.send(finalresult);
});
});
app.get('/', function(req, res){
console.log('Required');
console.log(req.body);
res.end('got');
});

app.listen(80);