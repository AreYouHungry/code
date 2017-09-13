var mysql = require("mysql");

/*创建数据库连接对象*/
var connection = mysql.createConnection({
	host: 'localhost', //主机地址
	user: 'root', //用户名
	password: '', //密码
	database: 'xrmdata' //数据库名
});
connection.connect(); //连接数据库
module.exports = connection;