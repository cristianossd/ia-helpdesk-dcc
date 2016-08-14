var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jslint = require('gulp-jslint');
var watch = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src(['./src/js/**/*.js'])
    .pipe(gulp.dest('./public/js'));
});

gulp.task('lint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(jslint({
      node: true,
      evil: true,
      nomen: true,
      global: [],
      predef: [],
      reporter: 'default',
      errorsOnly: false
    }))
    .on('error', function(error) {
      console.error(String(error));
    });
});

gulp.task('copy', function() {
  gulp.src('./src/css/**/*.css')
    .pipe(gulp.dest('./public/css'));
  gulp.src('./src/imgs/**/*.{png,jpg,svg,gif}')
    .pipe(gulp.dest('./public/imgs'));
});

gulp.task('sass', function() {
  var files = ['./src/sass/app.scss'];

  return gulp.src(files)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/js/**/*.js', './src/sass/**/*.scss'], ['scripts', 'lint', 'sass']);
});

gulp.task('assets', ['scripts', 'copy', 'sass', 'watch']);
gulp.task('install', ['scripts', 'copy', 'sass']);
