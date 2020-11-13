const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const fileinclude = require('gulp-file-include');
const config = require('../config')

module.exports = function pug2html() {
    return gulp.src('src/*.html')
        .pipe(fileinclude())
        .pipe(plumber())
        .pipe(htmlValidator())
        .pipe(bemValidator())
        .pipe(gulp.dest('build'))
}