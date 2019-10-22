const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index'), //入口
    output: { //出口
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, 'public/dist/'),
        publicPath: '/dist/'
    },
    module:{
        rules:[
            //ts-loader 用来解析ts文件
            //需要安装以下依赖
            //npm install ts-loader --save-dev
            //npm install typescript --save-dev
            //安装react相关依赖
            //npm install --save-dev react react-dom @types/react @types/react-dom
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,//不解析node_modules
                    loader: 'ts-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']//支持react jsx和ES6语法编译
                    }
                  },
                //加载json，png等文件
                //安装npm install --save-dev file-loader
                {
                   test: /\.[(png)|(obj)|(json)]$/,
                   loader: "file-loader" 
                },
                //加载css
                //安装npm install --save-dev css-loader
                //npm install style-loader --save-dev
                {
                   test: /\.css$/,
                   use: ['style-loader', 'css-loader']
                },
                {
                   test: /\.ejs$/,
                   loader: "ejs-loader?variable=data"
                },
            ]    
    },
    resolve: {
        //下面后缀的文件导入时可以省略文件名，js必须要有，否则会react.js文件会无法被解析
        extensions: [".ts", ".tsx", ".js"]
     },
     devtool: 'source-map', //调试工具，不同模式构建速度不同，source-map适合生存环境，开发环境用eval-source-map
     //安装依赖
     //npm install --save-dev webpack-dev-server
     devServer: {
        contentBase: path.resolve(__dirname, "./public/dist"),
        compress:true,
        port:8080,
        host:'127.0.0.1'
      },
      plugins: [
       //该插件将为你生成一个HTML5文件，其中包括使用script标签的body中的所有webpack包
       //安装npm install --save-dev html-webpack-plugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './views/index.ejs',
        })
  ]
}