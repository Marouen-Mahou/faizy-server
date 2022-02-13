var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.sendEmail = async function (req, res){

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
        auth: {
        user: 'faizynoreply@gmail.com', 
        pass: 'faizy123456', 
        },
    }));

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `UI / UX Designer Job <${req.body.name}>`, // sender address
        headers: {
          'My-Custom-Header': 'header value'
        },
        to: 'Faizyjamaltech@gmail.com', // list of receivers
        subject: "Interview", // Subject line
        text: "Hello world?", // plain text body
        html: ` <b>Name : </b> ${req.body.name} <br>
                <b> Phone : </b> ${req.body.phone} <br>
                <b> Email : </b> ${req.body.email} <br>
                <b> Message : </b> ${req.body.message} ` , // html body
      }, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.status(200).send('email sent');
}