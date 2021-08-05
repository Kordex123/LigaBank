const gulp = require('gulp');
const debug = require('gulp-debug');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const rastImages = () => gulp.src('public/img/**/*.{jpg,png,svg}')
  .pipe(imagemin([
    imagemin.mozjpeg({ quality: 90, progressive: true }),
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.svgo(),
  ]))
  .pipe(gulp.dest('public/imgMin'));

exports.rastImages = rastImages;

const vectImages = () => gulp.src('src/assets/img/**/*.{svg}')
  .pipe(imagemin([
    imagemin.svgo(),
  ]))
  .pipe(gulp.dest('src/assets/imgMin'));

exports.vectImages = vectImages;

const createWebp = () => gulp.src('public/img/**/*.{jpg,png}')
  .pipe(debug())
  .pipe(webp({ quality: 90 }))
  .pipe(gulp.dest('public/imgWebp'));

exports.createWebp = createWebp;
