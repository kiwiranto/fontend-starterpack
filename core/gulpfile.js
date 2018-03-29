var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "../"
    });

    gulp.watch("./scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("../*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
return gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(uglifycss())
  .pipe(gulp.dest('../css'))
});


gulp.task('default', ['serve']);