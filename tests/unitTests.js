// Checks various functions
Testing.addTest("square root", function(){
	Testing.equals(Math.sqrt(4),2);
});
Testing.addTest("metaTest equals (should fail)", function(){
	Testing.equals(true,false);
});
Testing.addTest("utils double", function(){
	Testing.equals(utils.double(2),4);
});
Testing.run("metaTest tests");

Testing.addTest("Email checker", function(){
	Testing.isTrue(utils.isEmail("bastien.girschig@gmail.com"));
	Testing.isTrue(utils.isEmail("bgirschig@google.com"));
	Testing.isFalse(utils.isEmail("bgirschig@google.c"));
	Testing.isFalse(utils.isEmail("bgirschig@com"));
})
Testing.run("email tests");