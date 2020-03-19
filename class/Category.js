var mysql = require('mysql');
var connection = mysql.createConnection({
	// Properties...
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'fernanstore'
});

class Category{

    constructor(){
        
    }


    categoryV1 = function(id){
        // select category
        let cat = "not working";
        let result;
        var sqlcategory = "SELECT * FROM category WHERE id = ?";
    
        connection.query(sqlcategory, id, function(err, row, fields) {
            if(!err){
                
                result = row//.map(v => Object.assign({}, v));

                Object.keys(row).forEach(function(key) {
                    row = result[key];
                    //return "console.log(row.category_code)";
                    // PAANO MAPAPALABAS YUNG RESULTS DITO????	
    
                      cat = row.category_code;
                     
                  });	
            }else{
                console.log(err);
            }	
            
        });

    };


    categoryV2 = function(){
        var userId = 1;
        var columns = ['id','category_code']; // add on this if you want to sleect more than 2 columns
        var query = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'category', userId], function (error, results, fields) {
        if (error) throw error;
            return results;
        });
    }











    read = function () {
         return "read";
    }
}

module.exports = Category;