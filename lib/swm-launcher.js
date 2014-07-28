module.exports = function(grunt){
	grunt.registerTask('swm-l-start', 'Start a selenium server.', function(){
		var spawn = require('child_process').spawn;
    	grunt._swm_ = spawn('webdriver-manager', ['start']);
    	console.log("Starting selenium server("+grunt._swm_.pid+")...");
	});
	grunt.registerTask('swm-l-stop', 'Stop a selenium server.', function(){
		var done=this.async();
		grunt._swm_.on("close",function(){
			console.log("Stopping selenium server...");
			done();
		});
		if (grunt._swm_ && grunt._swm_.stdin) {
			grunt._swm_.stdin.write('\x03');
		}
	});
};