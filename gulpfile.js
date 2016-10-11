var gulp    = require('gulp');
var gutil   = require('gulp-util');
var gulpif  = require('gulp-if');
var sass    = require('gulp-sass');
var debug   = require('gulp-debug');
var uglify  = require('gulp-uglify');
var inject  = require('gulp-inject');
var cssnano = require('gulp-cssnano');
var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');

// Browser syncronization
var browserSync = require('browser-sync').create();

// Inject paths
var paths = {
  sass: ['./src/sass/**/*.scss', './src/sass/**/*.sass'],
  javascript: [
    './src/js/**/*.js',
  ],
  html: ['src/*.html'],
  htmlDest: [
    './www',
    './www/js',
    './www/css',
  ],
  dests: {
    html: [
      './www',
    ],
    sass: [
      './www/css',
      {
        main: ['./www/css/main.css']
      },
    ],
    javascript: [
      './www/js/**/*.js',
    ]
  }
};

// Compile sass
gulp.task('move-sass-www', function() {
  return gulp.src(['src/sass/main.scss', 'src/sass/bulma.sass'])
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('www/css'));
  
});

// Move files html
gulp.task('move-html-www', function() {
  return gulp.src('src/**/*.html')
          .pipe(debug())
          .pipe(gulp.dest('www'));
});

// Move files js
gulp.task('move-js-www', function() {
  return gulp.src(paths.javascript[0])
    .pipe(uglify())
    .pipe(gulp.dest('www/js'));
});

// Watch on files changes
gulp.task('default', ['move-sass-www', 'move-js-www', 'move-html-www'], function() {
  gulp.watch(paths.sass[0], ['move-sass-www'])
  gulp.watch(paths.sass[1], ['move-sass-www'])
  gulp.watch(paths.html[0], ['move-html-www'])
  gulp.watch(paths.javascript[0], ['move-js-www']);

  console.log(gutil.colors.bgYellow.bold.black('::task') + gutil.colors.blue(' [All task executed]'));
});
