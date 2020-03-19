# layout and basic styling
* create our header and footer partials
* add in bootstrap



# RESTFUL ROUTES SAMPLE

name         url                  verb                  desc
=================================================================
index        /                GET                 display all important parts
New          /dogs/new            GET                 Show new form  
Create       /dogs                POST                Create a new dog, then redirect somewhere
Show         /dogs/:id            GET                 Show info about one specific dog
Edit         /dogs/:id/edit       GET                 Show edit form for one dog
Update       /dogs/:id            PUT                 Update a particular dog, then redirect somewhere
Destroy      /dogs/:id            DELETE              Delete a particular dog, then redirect somewhere


# RESTFUL ROUTES FOR PRODUCT

name         url                  verb                  desc
=================================================================
index        /product             GET                 display all important parts
product      /product             POST


# your delay task
[] create object for data structure of product
[] foreach




		var id = rows[0].id;
		var catId = rows[0].category_id;
		var companyId = rows[0].company_id;
		


		var sqlprice = "SELECT * FROM price WHERE id = ?";
		connection.query(sqlprice, id, function(err, row, fields) {
			if(!err){
				product = row[0].price_based_wholesale + row[0].price_tubo_wholesale;
				//console.log(product);
				
			}else{
				console.log(err);
			}
		});

		// select category
		var sqlcategory = "SELECT * FROM category WHERE id = ?";
		connection.query(sqlcategory, catId, function(err, row, fields) {
			if(!err){
				
				//console.log(row[0].category_code);
				
			}else{
				console.log(err);
			}
		});

		// select company
		var sqlcategory = "SELECT * FROM company WHERE id = ?";
		connection.query(sqlcategory, companyId, function(err, row, fields) {
			if(!err){
				//console.log(row[0].company_name);
			}else{
				console.log(err);
			}
		});