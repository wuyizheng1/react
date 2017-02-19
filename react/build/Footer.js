var React =require("react");
var Footer=React.createClass({
	render:function(){
		return(
		  <div className="container marketing">
         <footer>
            <p className="pull-right"><a href="#">Back to top</a></p>
            <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
          </footer>
      </div>
		)
	}
})
module.exports=Footer;
