var React=require('react');
var NavLink=require('./NavLink');

var Home=React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return{
			list:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				list:res.subjects
			})
		})
	},
	render:function(){
		console.log(this.state.list)
		if(this.state.list.length>0){
			var lst=[];
			var data=this.state.list;
			var listLen=data.length;
			var pageSize=9;
			var totalPages=Math.ceil(listLen/9);

			console.log(listLen)
			console.log(totalPages)
			for(var i=0;i<listLen;i++){
				var detailUrl="/detail/"+data[i].id
				lst.push(
					<div className="col-lg-4" key={i}>
			          <img className="img-circle" src={data[i].images.medium} alt="Generic placeholder image" width="140" height="140"/>
			          <h2>{data[i].title}</h2>
			          <p>{data[i].original_title}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">View details &raquo;</NavLink>
			         
			          </p>
			        </div>
					)
			}
		}
		return (
			
			    <div className="container marketing">

			      
			      <div className="row">
			       {lst}
			      </div>
				  <nav aria-label="Page navigation">
					  <ul className="pagination">
					    <li>
					      <a href="#" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>
					    <li><a href="#">1</a></li>
					    <li><a href="#">2</a></li>
					    <li><a href="#">3</a></li>
					    <li><a href="#">4</a></li>
					    <li><a href="#">5</a></li>
					    <li>
					      <a href="#" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
					  </ul>
					</nav>
     
				</div>

			)
	}
})
module.exports=Home;