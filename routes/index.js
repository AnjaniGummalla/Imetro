var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./../models/User');

// CREATES A NEW USER
router.post('/create', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.post('/forgotpassword', async function(req, res) {

		 	 var email = req.body.email;
		  	 console.log(email);
			 var passworddata = await User.find({email:email}).select('password');
			 console.log("passworddata",passworddata[0].password)
		     var transporter = nodemailer.createTransport({
	        service: 'gmail',
	        auth: {
	          user: 'anjani513devi@gmail.com',
	          pass: 'anjanichotu4507'
	        }
	      });

	      var mailOptions = {
	    	//from: 'anjani513devi@gmail.com',
			    to: email,
			    subject: 'Paaword Mail!!!',
			    text: "Your current password is " + passworddata[0].password
		  };

			transporter.sendMail(mailOptions, function(error, info){
			    if (error) {
			    console.log("erorr related the mail ", error);
			    } else {
			    console.log('Email sent: ' + info.response);
			    }
			 	});
		    res.status(200).send("password has been sent to your email!!!");
		   
		    });

module.exports = router;