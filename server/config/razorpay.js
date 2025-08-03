const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY || "rzp_test_cEtswxj6pxi3Kd",
	key_secret: process.env.RAZORPAY_SECRET || "8RBwQyywEDacSUIlU76GpXK6",
});  