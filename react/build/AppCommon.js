var  React=require('react');
var Header=require('./Header.js');
var Footer=require('./Footer.js');

var  AppCommon=React.createClass({
	contextTypes:{
		router:React.PropTypes.object
	

	},
	render:function(){
		// console.log(this)
		console.log(this.props);
		// console.log(this.state);
		// console.log(this.props.children)很重要的配合路由,映射组件,替换
		return(
			<div>
				<Header  />
				{this.props.children}
				<Footer/>	
			</div>
		)
	}
})

module.exports=AppCommon;