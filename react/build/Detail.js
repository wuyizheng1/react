var React =require("react");
var  NavLink=require("./NavLink.js");  //后面是路径啊,不是文件
var List=React.createClass({
	getDefaultProps:function(){
    return{
      url:'http://wyzpw.pw/php/helDetail.php'

    }
  },
  getInitialState:function(){
    return{
       Detail:null,
      classId:0,
      page:1
    }
  },
   getData:function(){
   		 var _this=this;
   		 // 获取路径中返回到饿指只有这种方法获取
  	var classId=this.props.params.classId;
  	var page=this.props.params.page;
  	var id=this.props.params.id;

  	$.ajax({
  		url:this.props.url,
  		data:{

  			id:id
  		},
  		dataType:'json'
  		  	}).done(
  		function(res){
  			console.log("这是detail返回结果")
  			 console.log(res)
  			// Object {result: Object, error_code: 0, reason: "Succes"}
  			var ress=res.result;
  		
  		
  			//1243
  			_this.setState({
  				id:id,
  				res:ress,	
  				classId:classId,
  				page:page
  			})
  		}
  	)
   },
  componentWillMount:function(){
  		//加载之前ajax请求
   			this.getData();
  		
  },
  componentWillReceiveProps:function(nextProps){
  			this.getData();

  },
	render:function(){
			var data=this.state.res;
			var classId=this.state.classId;
			var id=this.state.id;
			var page=this.state.page;
			var styletwo={
			
			textAlign:"center",
			margin:"0 auto"
			}
			var  imgstyle={
			width:'140px',
			height:'140px'
			}
			if(data){
				var  url="/list/"+classId+"/"+page;
				var datail=(
					<div className="container" >
						<div className="starter-template" style={styletwo}>
						<h3>{data.title}</h3>
						<img src={data.img} style={imgstyle}/>
						<p >  {data.description}</p>
						<NavLink  to={url} className="btn btn-primary btn-lg center" role="button">返回列表</NavLink>
						</div>
					</div>

				)
			}
		return(
		 
   			<div className="container marketing">
   				{datail}
	      </div>

		)
	}
})
module.exports=List;