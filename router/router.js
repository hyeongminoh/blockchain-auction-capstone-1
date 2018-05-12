module.exports = function(app){


	app.get('/', function(req,res){
		res.render('index')
	});

	app.get('/main_index', function (req, res) {
		res.render('main_index');
	});

	app.get('/blog_single', function (req, res) {
		res.render('blog_single');
	});

	app.get('/blog', function (req, res) {
		res.render('blog');
	});

	app.get('/cart', function (req, res) {
		res.render('cart');
	});

	app.get('/error;', function (req, res) {
		res.render('error');
	});

	app.get('/product', function (req, res) {
		res.render('product');
	});

	app.get('/regular', function (req, res) {
		res.render('regular');
	});

	app.get('/shop', function (req, res) {
		res.render('shop');
	});

	app.get('/signin', function (req, res) {
		res.render('signin');
	});

	app.get('/shop_digital_computer_furniture', function (req, res) {
		res.render('shop_digital_computer_furniture');
	});

}