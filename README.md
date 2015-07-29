# gulp-matrix-style
stylesheets processing of the Matrix project


### 使用场景
H5 单页site，viewport之间的切换速度极快，解决使用link引用样式延迟问题。

#### 页面例子
index.hmtl
```
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/assets/style/base.css">        
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


