var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'emberautocar@gmail.com',
        pass:'ear@msr9387'
    }
});
var mailOptions = {
    from: 'emberautocar@gmail.com',
    to: 'emberautocar@gmail.com',
    subject: 'Test nodemailer ',
    text: 'je teste nodemailer avec la nouvelle adresse'
};
transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Yeah email sent ' + info.response)
    }
})