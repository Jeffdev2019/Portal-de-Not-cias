var mysql = require('mysql');

var connMySql = function(){  //wrapper

    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'admin',
        database : 'portal_noticias'
    });
}
module.exports = function(){
    return connMySql;
}