var express = require("express");
var mysql = require('mysql');
var app     = express();
var bodyParser = require("body-parser");

var Category = require("./class/Category");
var newCategory = new Category();


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

// RESTFUL
/**********************************************************
	DEFAULT PAGE
**********************************************************/
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


/**********************************************************
	PRODUCT
**********************************************************/
// main product
app.get("/product", function(req, res){
	let products = [];
	let categories = [];
	let company = [];
	let companyItems = {
		id: "",
		company_name: ""
	}
	let categoryItems = {
		id: "",
		category_code: ""
	}
	let items = {
		id: "",
		productName: "",
		price: "",
		piecesPerBundle: "",
		bundlePerSako: "",
		productUsedFor: "",
		productSize: "",
		img: "",
		category: "",
		company: ""
	};

	// select product table
	connection.query('SELECT * FROM product', (err, rows, fields)=>{
					
		if(!err){
		// check kung ilang rows
		// loop para isasave sa products object
			for(var i = 0; i < rows.length; i++){
				
				items =	{
						id: rows[i].id,
						productName: rows[i].product_name,
						price: rows[i].price_id,
						piecesPerBundle: rows[i].product_pcs_per_bundle,
						bundlePerSako: rows[i].product_bundle_per_sako,
						productUsedFor: rows[i].product_used_for,
						productSize: rows[i].product_size,
						img: rows[i].img_id,
						category: rows[i].category_id,
						company: rows[i].company_id 
					};
	
					products.push(items);
			}
		}
			else{
			console.log(err);
		}


		// get all  category_code from category table and save sa object
		connection.query("SELECT * FROM category", function (err, rows, fields) {
		if (err) throw err;
			for(var i = 0; i < rows.length; i++){
				categoryItems = {
					id: rows[i].id,
					category_code: rows[i].category_code
				};
				categories.push(categoryItems);
			}

			


		// sort all products
		for(var i = 0; i < products.length; i++){

				// sort all category
				// problem : how can i sort all categories in order to get the right code
			var c = 0;
			var itr = false;

			while (itr == false) {
				if(products[i].category == categories[c].id){
					products[i].category = categories[c].category_code;
					var itr = true;
					c = 0;
				}else{
					var itr = false;
					c++;
				}
				
			}
		}

		

		});

		// get all  Company name from company table and save sa object
		connection.query("SELECT * FROM company", function (err, rows, fields) {
			if (err) throw err;
				for(var i = 0; i < rows.length; i++){
					companyItems = {
						id: rows[i].id,
						company_name: rows[i].company_name
					};
					company.push(companyItems);
				}
	
				
	
	
			// sort all company name
			for(var i = 0; i < products.length; i++){
	
					// sort all category
					// problem : how can i sort all categories in order to get the right code
				var c = 0;
				var itr = false;
	
				while (itr == false) {
					if(products[i].company == company[c].id){
						products[i].company = company[c].company_name;
						var itr = true;
						c = 0;
					}else{
						var itr = false;
						c++;
					}
					
				}
			}
			//console.log(products);
			//res.send(products);
			res.render("product", {products:products});
		});


		
		
		
	});
});

// add product
app.post("/product", function(req, res){
	// get data from forms
	var productName 			= req.body.product.productName;
	var piecesPerBundle 		= req.body.product.productPPB;
	var	bundlePerSako			= req.body.product.productBPS;
	var	priceInvestment			= req.body.product.productPI;
	var	priceBasedWholesale		= req.body.product.productPBW;
	var	priceTuboWholesale		= req.body.product.productPTW;
	var	productSize				= req.body.product.productPS;
	var	productUsedFor			= req.body.product.productPUF;
	var	productImage			= req.body.product.productIMG;
	var	productCategory			= req.body.product.productCategory;
	var	productCompany			= req.body.product.productCompany;
	
	//connect to db
	// insert to  db
	console.log(req.body.product.productName);
});

// form
app.get("/new", function(req, res){
    res.render("new");
});

app.listen('1414', process.env.IP, function() {
    console.log("Administrator Server Has Started"); 
});