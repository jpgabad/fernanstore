// this is sample on how to connect database in express
var mysql = require('mysql');


var connection = mysql.createConnection({
	// Properties...
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'fernanstore'
});

// connection.connect(function(error){
// 	// callback
// 	if(!!error){
// 		console.log('Error');
// 	}else {
// 		console.log('Connected');
// 	}
// });

connection.connect(function(error) {

        if(!!error){
          console.log('Error');
        }else {

            connection.query("SELECT * FROM sample", function (error, result, fields){
                if(!!error){
                    console.log('Error');
                }else {
                    console.log(result);
                }
        
        });

        }
});