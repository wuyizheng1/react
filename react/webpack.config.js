//webpack符合common.js规范   出入口文件和模块 loaders

module.exports={
	entry:'./build/App.js',
	output:{
		filename:'boudle.js',
		 publicPath: ""
	},
		

	module:{
		loaders:[{
			test:/\.js$/,  //通过入口文件匹配处理的所有的js文件
			
			loader:"babel-loader?presets[]=es2015&presets[]=react"//通过jsx-loader加载器进行文件代码的解析操作,如果说你要操作sass/css/style等,你可以选择安装并使用其他的加载器
		}]   //baber解析器需要  es5和react支持
	}
}

