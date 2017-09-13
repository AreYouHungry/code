var userdao=require("../models/user_dao.js");
var params=['123','123',123,'123',123,148];
userdao.updUsers(params,function(err,result){
	console.log(err,result);
});