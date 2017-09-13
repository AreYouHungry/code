var userdao=require("../models/user_dao.js");
var params=[146];
userdao.getUsersbyid(params,function(err,result){
	console.log(err,result);
})