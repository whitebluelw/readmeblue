var React=require('react');
var ReactDOM=require('react-dom');

//路由
var Router=require('react-router').Router;
var Route=require('react-router').Route;
var hashHistory=require('react-router').hashHistory;
var IndexRoute=require('react-router').IndexRoute;

var App=require('./modules/App');
var About=require('./modules/About');
var Contact=require('./modules/Contact');
var Home=require('./modules/Home');
var Detail=require('./modules/Detail');
var Register=require('./modules/Register');
var Login=require('./modules/Login');
var Ping=require('./modules/Ping');

var Index=React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/detail/:id" component={Detail}>
						
					</Route>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/register" component={Register}/>
					<Route path="/login" component={Login}/>
				</Route>
			</Router>
			)
	}
})

ReactDOM.render(<Index/>,document.getElementById('app'));