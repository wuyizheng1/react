var  React=require("react");
var  ReactDom=require("react-dom");

//漏油
var Router=require("react-router").Router;
var Route=require("react-router").Route;
var hashHistory=require("react-router").hashHistory;

var AppCommon=require('./AppCommon.js');  //这是公共有2个模板
var List=require("./List.js");

var Home=require("./Home.js");
var About=require("./About.js");
var Contact=require("./Contact.js");
var Detail=require("./Detail.js");
	//如果url含有/home就会去访问/和home
	//1映射哈希历史 2./+home 
	//<Route path="/list/:classId/:page/:id" component={Detail}/>
var App=React.createClass({
	render:function(){

		 	// console.log(this)
		 	// console.log(this.props)
		return(
			<Router  history={hashHistory}>
				<Route path="/" component={AppCommon}>
				
					<Route path="/home" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/list/:classId" component={List}/>
					<Route path="/list/:classId(/:page)" component={List}/>
					<Route path="/Detail/:classId/:page/:id" component={Detail}/>
					<Route path="/Detail/:classId(/:page)/:id" component={Detail}/>
					
				</Route>
			</Router>


		)
	}
})
var obj={name3:"da",name4:"xiao"}
ReactDom.render(<App  name1="wu" {...obj}/>,document.getElementById("app"));
//这个老大 app接受所有的虚拟dom ,其他都是暴露,只有这个有render,而这个js被复制到根目录下  