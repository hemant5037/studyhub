const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,   // smtp.gmail.com
      port: 587,                     // ✅ REQUIRED
      secure: false,                 // TLS
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // App Password
      },
    });

    let info = await transporter.sendMail({
      from: `"Studynotion | Hemant" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log(info.response);
    return info;
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return error.message;
  }
};

module.exports = mailSender;
