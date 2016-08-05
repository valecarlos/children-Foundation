module.exports = function(grunt){
	// 1. All configuration goes here 
	grunt.initConfig({
	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded'
	      },
	      files: {                         // Dictionary of files
	        'css/result.css': 'sass/theme.sass',
	        'css/newsTheme.css': 'sass/newsTheme.sass',
	        'css/productsTheme.css': 'sass/productsTheme.sass',
	        'css/aboutTheme.css': 'sass/aboutTheme.sass'
	      }
	    }
	  },
	  postcss: {
      	options: {
	      map: true, // inline sourcemaps 
	      processors: [
	        require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes 
	      ]
	    },
	    dist: {
	      src: 'css/*.css'
	    }
	  },
	  watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass','postcss']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}