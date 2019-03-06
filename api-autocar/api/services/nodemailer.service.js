const nodemailer = require("nodemailer");

exports.nodemailer = async (param, info) => {
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

  let output;
  let subjectinfo;
  let textInfo;
  if(param === "creationClient"){
    output = `
      <h1>Information sur la création de votre compte client sur le site Pimp My Trip.</h1>
      <p>Merci de nous avoir choisi pour votre voyage et Bienvenue sur notre site.</p>
      <p>Nous vous avons créé un compte pour pouvoir plus facilement suivre votre demande de devis.</p>
      <p>Pour pouvoir vous connecter, il vous faut d'abord cliquer sur le lien ci-dessous pour choisir votre mot de passe.</p>
      <h3>Cliquez sur le lien ci-dessous pour finaliser votre inscription : </h3>
      <a href="http://localhost:4200/tokenauth/${info.token}">vers la page changement de mot de passe.</a>
    `;
    subjectinfo = "Dernière étape pour la création de votre compte - Pimp My Trip";
    textInfo = "Info création de compte - Pimp My Trip"
  }else if(param === "quoteClientToAgent"){
    output = `
      <h1>Un client vous a envoyé une demande de devis sur le site Pimp My Trip.</h1>
      <p>Le client N° ${info} vous a envoyé une demande de devis.</p>
      <p>Cliquez sur le lien ci-dessous pour arriver directement à la page de connexion.</p>
      <a href="http://localhost:4200/login">vers la page login.</a>
    `;
    subjectinfo = "Nouvelle demande de devis - Pimp My Trip";
    textInfo = "Info nouvelle demande de devis - Pimp My Trip"
  }else if(param === "quoteAgentToClient"){
    output = `
      <h1>Votre agent vous a envoyé une proposition de devis sur le site Pimp My Trip.</h1>
      <p>Votre agent vous a envoyé une proposition de devis pour le devis n°${info}.</p>
      <p>Cliquez sur le lien ci-dessous pour arriver directement à la page de connexion.</p>
      <a href="http://localhost:4200/login">vers la page login.</a>
    `;
    subjectinfo = "Nouvelle proposition de devis - Pimp My Trip";
    textInfo = "Info nouvelle proposition de devis - Pimp My Trip"
  }

  let mailOptions = {
    from: 'ProjectEmberAutocar', 
    to: 'emberautocar@gmail.com', 
    subject: subjectinfo, 
    text: textInfo, 
    html: output 
  };

  await transporter.sendMail(mailOptions);
}