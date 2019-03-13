
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');
var install = require("gulp-install");
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.src(['./bower.json', './package.json'])
  .pipe(install());


gulp.task('scripts', function () {
  return gulp.src(['assets/js/sources/*.js','assets/js/sources/myModules/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('sass', function () {
  gulp.src('assets/scss/*.scss')
    .pipe(sass({ includePaths: ['scss'] }))
    .pipe(gulp.dest('assets/css/sources'))
    .pipe(browserSync.stream());
});

gulp.task('cssConcat', function () {
  return gulp.src('assets/css/sources/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('browser-sync', function () {
  browserSync.init(["assets/css/bundle.css", "assets/js/*.js"], {
    server: {
      
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
});

gulp.task('fileinclude', function () {
  gulp.src(['blocks/**/*.html', '!blocks/modules/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'browser-sync', 'cssConcat', 'fileinclude', 'scripts'], function () {

  gulp.watch("assets/scss/*.scss", ['sass']);
  gulp.watch("assets/css/sources/*.css", ['cssConcat']);
  gulp.watch("blocks/*.html", ['fileinclude']);
  gulp.watch("blocks/modules/*.html", ['fileinclude']);
  gulp.watch("blocks/services/*.html", ['fileinclude']);
  gulp.watch(["*.html", "services/*.html"]).on('change', browserSync.reload);
  gulp.watch(["assets/js/**"],['scripts']).on('change', browserSync.reload);

});