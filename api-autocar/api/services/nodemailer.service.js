const nodemailer = require("nodemailer");

exports.nodemailer = async (accessToken) => {
  console.log(accessToken);
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "emberautocar@gmail.com",
        pass: "ear@msr9387"
    }
  });

  const output = `
        <h1>Information sur la création de votre compte client sur le site Pimp My Trip</h1>
        <p>Bla bla bla texte de bienvenue</p>
        <h3>Cliquez sur le lien ci-dessous pour finaliser votre inscription : </h3>
        <a href="">${accessToken}</a>
  `;

  let mailOptions = {
    from: 'ProjectEmberAutocar', 
    to: 'emberautocar@gmail.com', 
    subject: "Test token add client", 
    text: "Info création de compte - Pimp My Trip", 
    html: output 
  };

  await transporter.sendMail(mailOptions);
}