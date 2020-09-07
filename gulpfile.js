const gulp = require("gulp");  //引入 gulp 插件
const sass = require("gulp-sass");  //引入 gulp-sass 插件
// const gulpRubySass = require("gulp-ruby-sass");
//const livereload = require("gulp-livereload");   //引入gulp-livereload 插件,用于实现浏览器自动刷新的插件
gulp.task("sass",function(){     //创建一个任务 名叫 sass ,定义一个匿名函数
   return gulp.src("sass/*.scss")      //定义源文件  1
    .pipe(sass())                 //调用sass 插件的方法，预编译sass文件
    // .pipe(gulpRubySass()) 
    .pipe(gulp.dest("css"))      //输出到dist文件夹下的css文件夹中
    //.pipe(livereload());         //这里是调用浏览器自动刷新的插件方法
}) 
gulp.task("watch",function(){       //创建一个任务 名叫 watch,定义一个匿名函数
   //livereload.listen();            //关联服务器
    gulp.watch("sass/*.scss",gulp.series(["sass"])); //2 监察sass src文件夹中的scss 格式的文件是否被改动，是的话执行sass任务，编译sass文件
})

gulp.task('default', gulp.series("watch"));  // 3 4
