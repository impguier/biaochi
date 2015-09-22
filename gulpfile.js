var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber'); // 用来忽略报错
gulp.task("less",function(){
     gulp.src('./asset/less/**/*.less')
         .pipe(plumber())
         .pipe(less({
            paths:['./asset/less/**/*.less']
         }))
         .pipe(gulp.dest('./asset/css'))
});
gulp.task('dev',function(){
   gulp.watch('./asset/less/**/*.less',['less']);
});
