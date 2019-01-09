
var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');
var install = require("gulp-install");
var fileinclude = require('gulp-file-include');
 
gulp.src(['./bower.json', './package.json'])
  .pipe(install());


gulp.task('sass', function () {  
    gulp.src('assets/scss/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('assets/css/sorces'))
        .pipe(browserSync.stream());
});

gulp.task('cssConcat', function () {
  return gulp.src('assets/css/sorces/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["assets/css/bundle.css", "assets/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('fileinclude', function() {
    gulp.src('blocks/*.html')
      .pipe(fileinclude({
        prefix: '@@',
        
      }))
      .pipe(gulp.dest('./'));
  });

gulp.task('default', ['sass', 'browser-sync', 'cssConcat', 'fileinclude'], function () {  
    
    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("assets/css/sorces/*.css", ['cssConcat']);
    gulp.watch("blocks/*.html", ['fileinclude']);
    gulp.watch("blocks/modules/*.html", ['fileinclude']);
    gulp.watch("*.html").on('change', browserSync.reload);
     
});