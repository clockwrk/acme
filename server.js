
var swig 		= require('swig'),
	bodyParser 	= require('body-parser'),
	morgan 		= require('morgan'),
	express		= require('express'),
	router 		= require('./routes');

var app 		= express();

app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('viws',__dirname + '/views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err,req,res, next){
	res.status(err.status || 500);
	console.error(err);
	res.render(
		'error',{error: err.status}	
	);
});


app.listen(3000, function(){
	console.log("Hello from the otherside");
  console.log('listening on ' + 3000);
});

module.exports = app;
