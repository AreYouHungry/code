var db=require("./db");
module.exports={
	addUser:function(params,callback){
		db.query("insert into user(name,password,phone,avatar,integral) values(?,?,?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	getUsers:function(callback){
		db.query("select * from user",function(err,result){
			callback(err,result);
		});
	},
	getUsersbyid:function(params,callback){
		db.query("select *from user where id=?",params,function(err,result){
			callback(err,result);
		})
	},
	updUsers:function(params,callback){
		db.query("update user set name=?,password=?,phone=?,avatar=?,integral=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	delUsers:function(params,callback){
		db.query("delete from user where id=?",params,function(err,result){
			callback(err,result);
		})
	}
}
