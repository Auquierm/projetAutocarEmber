const nodemailer = require("nodemailer");

exports.nodemailer = async (accessToken) => {
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
        <p>Merci de nous avoir choisi pour votre voyage et Bienvenue sur notre site.</p>
        <p>Nous vous avons créé un compte pour pouvoir plus facilement suivre votre demande de devis.</p>
        <p>Pour pouvoir vous connecter, il vous faut d'abord cliquer sur le lien ci-dessous pour choisir votre mot de passe.</p>
        <h3>Cliquez sur le lien ci-dessous pour finaliser votre inscription : </h3>
        <a href="http://localhost:4200/tokenauth/${accessToken.token}">vers la page changement de mot de passe.</a>
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