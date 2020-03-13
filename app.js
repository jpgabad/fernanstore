var express = require("express");
var mysql = require('mysql');
var app     = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('assets'));

var connection = mysql.createConnection({
	// Properties...
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'fernanstore'
});

connection.connect(function(error){
	// callback
	if(!!error){
		console.log('Error');
	}else {
		console.log('Connected');
	}
});


app.get("/", function(req, res) {
    // connect to database
    connection.query("SELECT * FROM sample", function(error, result, fields){
        if (!!error) {
			console.log('Error in the query');
		} else {
			//res.json(rows);
            res.render("home", {final:result});		
		}
    });

});

// home
app.get ("/allimages", function(req, res) {
  
   


});

// post logic
app.post("/allimages", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newImages = {name: name, image: image}
    campgrounds.push(newImages);
    // redirect back to campgrounds page
    res.redirect("allimages");
});

// form
app.get("/new", function(req, res){
    res.render("new");
});


app.listen('1414', process.env.IP, function() {
    console.log("Administrator Server Has Started"); 
});