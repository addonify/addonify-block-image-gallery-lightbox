'use strict';

var gulp = require('gulp');
var wpPot = require('gulp-wp-pot');

// if you have package.json and package-lock.json then "npm install"

// or

// npm init
// npm install gulp gulp-wp-pot --save-dev
// gulp makepot

// Task to run
gulp.task('makepot', function() {

    return gulp.src(['**/*.php', '!node_modules/**'])
        .pipe(wpPot({
            domain: 'addonify-gutenberg-block-image-gallery-lightbox',
            package: 'Addonify Gutenberg Block Image & Gallery Lightbox'
        }))
        .pipe(gulp.dest('languages/addonify-gutenberg-block-image-gallery-lightbox.pot'));
});