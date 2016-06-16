'use strict';
//配置provider和consumer
module.exports = {
	provider: {
		protocol: "http", 
		host: "127.0.0.1:8000",
		//获取用户的profile地址
		profileUrl: "/api/userinfo"
	}, 
	consumer: {
		protocol: "http", 
		host: "127.0.0.1:3000"
	}
};
