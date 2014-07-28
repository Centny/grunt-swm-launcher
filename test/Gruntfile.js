module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadTasks('../tasks');
  // grunt.loadNpmTasks('grunt-selenium-launcher');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    shell: {
      sleep: {
        command: 'sleep 3'
      }
    }
  });
  //server daemon
  grunt.registerTask('serve', ['swm-l-start','shell:sleep','swm-l-stop']);
};
