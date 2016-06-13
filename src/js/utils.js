utils = {};

utils.double = function(value){
	return value*2;
}
utils.encode64 = function(value){
	var b = new Buffer(value);
	return b.toString('base64');
}
utils.isEmail = function(value){
	var re = /\w+(?:\.\w+)?@\w{3,}\.\w{2,5}/;
	return re.test(value);
}