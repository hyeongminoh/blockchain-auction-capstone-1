module.exports = function(app){

	const db = require('../db');

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

	app.get('/resistration', function (req, res) {
		res.render('resistration');
	});

	app.get('/product_register', function (req, res) {
		res.render('product_register');
	});

	app.post("/resistration", function(req, res, next){
  		
  		console.log("post");

  		console.log("email :", req.body.username);

  		let email = req.body._email;
 		
 		console.log("email :", req.body.username);

 		let transporter = nodemailer.createTransport({
 		service: 'gmail',
    	auth: {
      		user: 'mihn0621@gmail.com',  // gmail 계정 아이디를 입력
      		pass: 'jsklove1006'          // gmail 계정의 비밀번호를 입력
    	}
  		});
 
  		let mailOptions = {
    		from: 'mihn0621@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    		to: email ,                     // 수신 메일 주소
    		subject: 'Sending Email using Node.js',   // 제목
    		text: 'That was easy!'  // 내용
  		};
 
  		transporter.sendMail(mailOptions, function(error, info){
   			if (error) {
    		 	console.log(error);
   			} else {
     			console.log('Email sent: ' + info.response);
    		}
  		});
 
  		res.redirect("/");
	});

}