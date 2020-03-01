# 编写此项目遇到的问题
-----
1. 在`html`文件中如果用到了字符串模板，字符串模板中用到了变量，`html-plugin`是无法处理的，在运行和打包的时候会报错，想要不报错就需要借助一个`html-loader`
2. 移动端的点击事件有一个100-300ms的点击事件延迟问题，可以通过`fastclick`插件解决
    1. 通过`npm i fastclick`安装
    2. 在main.js中引入并使用
        + `import fastclick from 'fastclick'`
        + `fastclick.attach(document.body)`
2. 移动端开发中，一般情况下字体大小不会随着屏幕尺寸的变化而变化，但是由于是通过视口缩放来适配移动端，所以不能直接设置字体大小，因为这样的话字体大小会随着屏幕尺寸的变化而变化
3. 可以利用`postcss-pxtorem`实现自动将`px`转换成`rem`
    + 需要手动创建一个`postcss.config.js`文件进行配置