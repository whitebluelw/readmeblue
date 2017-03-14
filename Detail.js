var React=require('react');
var Router=require('react-router').Router;
var Route=require('react-router').Route;


var Detail=React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db',
			url1:'http://www.5dadaday.online/php/check.php'
		}
	},
	getInitialState:function(){
		return{
			list:[],
			all:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({url:this.props.url}).then(function(res){ 
			_this.setState({
				list:res.subjects
			})
		})
		$.ajax({url:this.props.url1}).then(function(res){ 
			var ress=JSON.parse(res)
			console.log(ress)
			_this.setState({
				all:ress
			})
			
		})
	},
	handlerSub:function(){
		const Talk=JSON.stringify(this.refs.talk.value);
		$.post("http://www.5dadaday.online/php/talk.php", { 'Talks': Talk},
		   function(data){
		     
		   });
		location.reload([true])
		
	},
	
	render:function(){
		var _id=this.props.params.id;
		
		var Lists=[];
		var data=this.state.list;
		var listLen=data.length;
		for(var i=0;i<listLen;i++){
			if(data[i].id==_id){
				
				Lists.push(
					<div className="jumbotron" key={i}>
						<h1>电影名称：{data[i].title}
						</h1>
						<div className="row" padding-left="0">
							<img src={data[i].images.large} width="100%" height="100%"/>
						</div>	
						<p>上映年代：{data[i].year}</p>
						<p>平均分：{data[i].rating.average}</p>
						<p>导演：{data[i].directors[0].name}</p>
						<p>主演：{data[i].casts[0].name}/{data[i].casts[1].name}/{data[i].casts[2].name}</p>
						<p>电影简介：{data[i].genres}</p>
						<p>剧照:
							<img src={data[i].casts[0].avatars.medium}/>
							<img src={data[i].casts[1].avatars.medium}/>
							<img src={data[i].casts[2].avatars.medium}/>
						</p>
						<div className="col-lg-15">
				          <textarea className="form-control" rows="10" ref="talk"></textarea>
				          <button type="button" className="btn btn-primary btn-lg" onClick={this.handlerSub}>发表评论</button>
				        </div>
				        
					</div>

					)
			}

		}
		var LIST=[];
		var Dota=this.state.all;
		var Dotalen=Dota.length;
		var who=localStorage.getItem('t1');
		for(var j=0;j<Dotalen;j++){
			console.log(Dota[j].usertalk)

			LIST.push(
				<div key={j}>{this.handlerSub1}<span>{who}说:</span><span>{Dota[j].usertalk}</span></div>
				)
		}
		
		return (
			<div>
				{Lists}
		      	{LIST}
		    </div>   
	      
			)
	}
})
module.exports=Detail;