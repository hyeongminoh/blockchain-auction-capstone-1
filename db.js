var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : null,
  database : 'auction'
});

// conn.connect();
// if(conn.connect())
// {
//   console.log('Success');
// }
// else {
//   console.log('Fail');
// }
// var sql = 'SELECT * FROM topic';
// conn.query(sql, function(err, rows, fields) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('rows', rows);
//     console.log('fields', fields);
//   }
// });
conn.connect(function(err) {
    if (err) {
        console.error('Error:- ' + err.stack);
        return;
    }

    console.log('Connected Id:- ' + conn.threadId);
});