var gulp = require('gulp')
var sass = require('gulp-sass')
gulp.task('sass', function () {
  gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
})
