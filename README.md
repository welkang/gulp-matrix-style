# gulp-matrix-style
stylesheets processing of the Matrix project


### 使用场景
H5 单页site，viewport之间的切换速度极快，解决使用link引用样式延迟问题。

### 页面例子
index.hmtl
```
<html>
    <head>
        <link type="text/css" href="/assets/style/base.css">        
    </head>
    <body>
        <!-- main content -->
    </body>
</html>
```
base.css
```
* {margin: 0; padding: 0;}
```
dest/index.html
```
<html>
    <head>
        <style type="text/css">
            * {margin: 0; padding: 0;}
        </style>
    </head>
    <body>
        <!-- main content -->
    </body>
</html>
```

### 使用说明 gulpfile.js
```
var gulp = require('gulp'),
    matrixStyle = require('gulp-matrix-style');

gulp.task('default', function() {
    return gulp.src('html5/flightlizard2/matrix-schedule-detail.html')
        .pipe(matrixStyle({
            path: 'html5/flightlizard2/matrix/style/', // html文件路径
            minify: true // 压缩css
        }))
        .pipe(gulp.dest('html5/flightlizard2/buildview'));
});
```

### Issues:

- 写在script中的link无法被解析，原因是cheerio只能获取DOM中的link节点
- `<link href="@assetPath("xxx/yyy.css")"/>` 无法读取此类型的href值


