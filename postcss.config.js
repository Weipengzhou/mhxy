module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-pxtorem')({
            rootValue: 100,    //以100px为准，不同方案修改这里
            propWhiteList: [],
        })
    ]
};