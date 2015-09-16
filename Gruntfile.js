module.exports = function (grunt) {

  grunt.initConfig({

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap.css.map',
          sourceMapFilename: 'css/bootstrap.css.map'
        },
        src: 'less/bootstrap.less',
        dest: 'css/bootstrap.css'
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap-theme.css.map',
          sourceMapFilename: 'css/bootstrap-theme.css.map'
        },
        src: 'less/theme.less',
        dest: 'css/bootstrap-theme.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ]
      },
      compile: {
        src: 'css/*.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      minifyCore: {
        src: 'css/bootstrap.css',
        dest: 'css/bootstrap.min.css'
      },
      minifyTheme: {
        src: 'css/bootstrap-theme.css',
        dest: 'css/bootstrap-theme.min.css'
      }
    },

    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less', 'autoprefixer', 'cssmin'],
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'watch']);
}
