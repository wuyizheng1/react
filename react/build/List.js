var React =require("react");
var  NavLink=require("./NavLink.js");  //后面是路径啊,不是文件
//ajax特点:只能访问服务器中内容, 没有服务器是访问不到的 
var List=React.createClass({
	getDefaultProps:function(){
    return{
      url:'http://wyzpw.pw/php/helList.php'

    }
  },
  getInitialState:function(){
    return{
       list:null,
      classId:0,
      total:0
    }
  },
   getData:function(){
   		 var _this=this;
  	var classId=this.props.params.classId;
  	var page=this.props.params.page||1;

  	$.ajax({
  		url:this.props.url,
  		data:{

  			id:classId,
  			page:page
  		},
  		dataType:'json'
  	}).done(
  		function(res){
  			// console.log(res)
  			// Object {total: 1243, result: Array[9], error_code: 0, reason: "Succes"}
  			var ress=res.result;
  			//只返回了9个对象
  			var total=res.total;
  			//1243
  			_this.setState({
  				list:ress,
  				total:total,
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
  	//属性改变时候还要加载一次
  	console.log(this)
	console.log(nextProps)   //想跳却未跳的页
	console.log("当前页码"+this.props.params.page)  //实际当前页
	if(nextProps.params.page==this.props.params.page){
				this.getData();
	}

  },
	render:function(){
		var  imgstyle={
			width:'140px',
			height:'140px'
		}
		var styleone={
			border:'1px solid black',
			textAlign:"center"
		}
		var lists=this.state.list;
		
		var rowList=[];
		console.log("这是什么")
		console.log(lists)
			console.log(this.state.total)
		if(lists){
			var  listLen=lists.length;
			console.log("只返回多少个对象"+ listLen)
			//只返回多少个对象 循环这个数组对象就行
			var pageMaxsize=Math.ceil(this.state.total/9);
			//一共多少页
			var n=3;
			for(var i = 0; i <Math.ceil(listLen/n); i++) { //多少行
					var collist=[];
					for (var j = 0; j < n; j++) { //某一列
						var  index=i*n+j;//位置,刚好返回的9个一一对应
						console.log(index)

						if(index<listLen){
							var linkurl="/detail/"+this.state.classId+"/"+this.state.page+"/"+lists[index].id;
							collist.push(
									
										
							<div key={index} className="col-lg-4" style={styleone}>
					          <img style={imgstyle} className="img-circle" src={lists[index].img} alt="Generic placeholder image" width="140" height="140"/>
					          <h2>{lists[index].title} </h2>
					          <p>{lists[index].description}</p>
					          <p><NavLink to={linkurl} className="btn btn-default" href="#" role="button">进入详情</NavLink></p>
							</div>
								     
							)
						}
					}
		     
									

					rowList.push(
						<div className="row"  key={i} >
			    		{collist}
				    
				     	</div>  
		     	 	)
			}
			var pageList=[];
			var  pageListContent;
			for (var i = 0; i < pageMaxsize; i++) {
				var linkurl='/list/'+this.state.classId+"/"+i;
				//第几个分类中  第几页
				pageList.push(
					<li key={i}>
						<NavLink to={linkurl}>{i}</NavLink>
					</li>

				)
			};

			pageListContent=(
				<nav>
					<ul className="pagination">
						{pageList}
					</ul>
				</nav>

			)
		}

		return(
		 
   		<div className="container marketing">
   			{rowList}
   			{pageListContent}
	      </div>

		)
	}
})
module.exports=List;