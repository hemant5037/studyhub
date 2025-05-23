const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });

const RAZORPAY_KEY = "rzp_test_cEtswxj6pxi3Kd"

const RAZORPAY_SECRET = "8RBwQyywEDacSUIlU76GpXK6"

exports.instance = new Razorpay({
	key_id: RAZORPAY_KEY,
	key_secret: RAZORPAY_SECRET,
});  