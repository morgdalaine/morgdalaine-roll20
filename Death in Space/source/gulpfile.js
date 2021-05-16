const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('./app/DeathInSpace.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(gulp.dest('../'))
})

// gulp.task('sass', function () {
//   return gulp.src(['./app/**/index.scss'])
//     .pipe(sass({
//       outputStyle: 'expanded'
//     }).on('error', sass.logError))
//     .pipe(prefix({
//       cascade: true
//     }))
//     .pipe(concat('DeathInSpace.css'))
//     .pipe(gulp.dest('../'))
// })

gulp.task('html', function () {
  return gulp.src('./app/DeathInSpace.pug')
    .pipe(pug({
      pretty: true,
      locals: require('../translation.json')
    }))
    .pipe(gulp.dest('../'))
})

gulp.task('watch', gulp.series(['sass', 'html'], () => {
  // gulp.watch('./app/**/*.styl', gulp.series(['css']))
  gulp.watch('./app/**/*.scss', gulp.series(['sass']))
  gulp.watch(['./app/**/*.pug','./app/**/*.js'], gulp.series(['html']))
}))

gulp.task('build', gulp.series([
  // 'css',
  'sass',
  'html']))
