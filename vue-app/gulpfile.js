var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
  gulp
    .src('./src/assets/scss/main.scss')
    .pipe(sass())
    .pipe(
      gulp.dest('./src/assets/css')
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('./src/assets/scss/main.scss', gulp.series('sass'));
    cb();
  })
);