var React =require("react");
var  NavLink=require("./NavLink.js");  //后面是路径啊,不是文件
var Header=React.createClass({
  getDefaultProps:function(){
    return{
      url:'http://wyzpw.pw/php/helFenlei.php'
    }
  },  
  getInitialState:function(){
    return{
       category:[] 
    }
  },
  componentWillMount:function(){

    var _this=this;
    $.ajax({url:_this.props.url,
      dataType:'json'
    }).done(function(res){
      // console.log(123)
      // console.log(res.result);
      var shuzu=res.result;
      _this.setState({
        category:shuzu
      })
        //属性的床底(还是自身组件)  状态的改变(自身组件内部)
    })
  },
	render:function(){
    var array=this.state.category;
    console.log("此处的array可能为空,且字符串链接");
    var zhu=[];
    if(array){
      var len=array.length;
      for (var i = 0; i < len; i++) {
      // console.log(array[i].id)
       
      zhu.push( 
        <li  key={i}>
        <NavLink to={ "/list/"+array[i].id} >{array[i].title}</NavLink>
        
        </li>


        )  
      };
    }
		return(
		<div className="navbar-wrapper">
     

        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Project wu</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              <li className="active"><NavLink to="/home">首页</NavLink></li>
                <li><NavLink to="/About">关于</NavLink></li>
                <li><NavLink to="/Contact">请联系我</NavLink></li>
                <li className="dropdown"> 
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">健康知识 <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                      {zhu}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
 


		)
	}
})
module.exports=Header;
   