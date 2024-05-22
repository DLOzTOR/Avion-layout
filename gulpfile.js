'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { watch, series } = require("gulp");
const fileinclude = require('gulp-file-include');
const pagesScssLocation = "./assets/scss/pages/*.scss";
const scssLocation = "./assets/scss/**/*.scss";
const scssBuildLocation = "./assets/css";
const pathsHtml = {
    src: './pages/',
    dest: './build/'
};
async function buildStyles() {
  return gulp.src(pagesScssLocation)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(scssBuildLocation));
};
async function buildHtml(){
  return gulp.src([
    pathsHtml.src + '*.html',
    '!' + pathsHtml.src + 'index.html'
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(pathsHtml.dest));
}
async function buildIndex(){
  return gulp.src([
    pathsHtml.src + 'index.html'
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
}
async function build(){
  buildStyles();
  buildHtml();
  buildIndex();
}

exports.build = build;

exports.watch = async function () {
    watch(scssLocation, buildStyles);
    //watch(pathsHtml.src, buildHtml);
    watch('./index.html', buildIndex);
}