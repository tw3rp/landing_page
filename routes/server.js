var express=require('express');
var net= require('net');
var HOST= '127.0.0.1';
var port='3001';


var send = {sendEmail: function(jsonobj){
				console.log('Im in server.js');
	//code to open a connection with our email engine
	var client = new net.Socket();
	client.connect(port,HOST,function(err){
			console.log('connected to: '+ HOST +':'+port);
			if(err) return next(err);
			client.write(JSON.stringify(jsonobj));
	});
	client.on('error',function(){
		console.log('connection error');
		client.destroy();
//		res.redirect('/');
	});
	
	client.on('data',function(data){
		console.log('received data!' );
		client.destroy();
		console.log('data: ' + data);
//		res.redirect('/');
	});

}};

module.exports = send;
