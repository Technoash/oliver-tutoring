var gulp = require('gulp'),
uglify =  require('gulp-uglify'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
webpack = require('webpack-stream');

gulp.task('default', ['scripts'])

gulp.task('dev', function(){
    gulp.src("src/js/*")
    .pipe(webpack({
        output: {
            filename: 'app.js'
        }
    }))
    .pipe(gulp.dest("dist/"))
    

    gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'))

    gulp.src("src/static/**.**")
    .pipe(gulp.dest("dist/static"))

    gulp.src("src/index.html")
    .pipe(gulp.dest("dist/"))

    gulp.src("src/pages/*.html")
    .pipe(gulp.dest("dist/pages"))
})

gulp.task('dev-watch', function(){
    gulp.watch('src/**/*', ['dev'])
})