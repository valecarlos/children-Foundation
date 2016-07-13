module.exports = function(grunt){
	// 1. All configuration goes here 
	grunt.initConfig({
	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded'
	      },
	      files: {                         // Dictionary of files
	        'css/result.css': 'sass/theme.sass'
	      }
	    }
	  },
	  watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}