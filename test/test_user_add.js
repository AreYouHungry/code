var userdao=require("../models/user_dao.js");

var params=['33','33',33,'33',33];
userdao.addUser(params,function(err,result){
	console.log(err,result);
});
