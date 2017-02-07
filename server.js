const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

/*app.listen(3000,function(){
	console.log('listening at 3000')
})*/


app.use(bodyParser.urlencoded({extended: true}))
/*app.get('/', function(req, res) {
  res.send('Hello World')
})*/
// Note: request and response are usually written as req and res respectively./
// ------------------- OR---------------------------------------------------------------

app.get('/',(req,res)=>{
	//res.send('hello anuj !!')
	//Home html file path
	res.sendFile(__dirname + '/index.html')
})



MongoClient.connect('mongodb://localhost:27017/anuj',(err,database)=>{
	if (err) {
		return console.log(err)
	}
	else{
		db = database
		//Create Server
		app.listen(3000,(req,res)=>{
			console.log('listening at 3000 port')
		})

		app.post('/quotes',(req,res)=>{
				//res.send(req.body)
				//Insertion goes Here
				db.collection('names').save(req.body,(err,result)=>{
					if (err) {
						return console.log(err)
					}
					else{
						console.log('Data Saved')
						res.redirect('/')
					}
				})

		})
	}
})
