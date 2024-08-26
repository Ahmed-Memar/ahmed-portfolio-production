import nodemailer from 'nodemailer';
import { userData } from './utils';

export const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

export const mailOptions = ({name, email, message}) => ({
  from: process.env.MY_EMAIL,
  to: process.env.MY_EMAIL,
  //cc: email, //(uncomment this line if you want to send a copy to the sender)
  subject: `Message from ${name}`,
  text: message,
  html: `
    <h1 style="color:green;">Mail from portfolio</h1>
    <p>Sender Name : <strong style="font-size:16px;">${name}</strong></p>
    <p>Sender Email : <strong>${email}</strong></p>
    <p>${message}</p>
  `
});

export const FrMail = ({name, email}) => ({
  from: process.env.MY_EMAIL,
  to: email,
  subject: "Réception de votre email - Réponse automatique",
  text: "Message automatique",
  html: `
    Bonjour ${name},

    <p>
      Merci d'avoir rempli le formulaire de contact sur mon portfolio. Ceci est un message automatique pour confirmer que j'ai reçu votre demande. Je vous répondrai dans les plus brefs délais. Si vous avez des questions urgentes, n'hésitez pas à me contacter directement par téléphone.
    </p>

    Cordialement,
    <p>
      ${userData.name} <br style="margin-bottom:10px;"/>
      <a href="https://ahmat-mahamat.vercel.app/">ahmat-mahamat.vercel.app</a> 
      <br style="margin-bottom:10px;"/>
      ${process.env.MY_EMAIL} <br style="margin-bottom:10px;"/>
      ${userData.phoneNumber} <br style="margin-bottom:10px;"/>
    </p>
  `
});

export const EnglishMail = ({name, email}) => ({
  from: process.env.MY_EMAIL,
  to: email,
  subject: "Receipt of your email - Automatic response",
  text: "Automatic message",
  html: `
    Hello ${name},

    <p>
      Thank you for filling out the contact form on my portfolio. This is an automatic message to confirm that I have received your request. I will answer you as soon as possible. If you have any urgent questions, please do not hesitate to contact me directly by telephone.
    </p>

    Best regards,
    <p>
      ${userData.name} <br style="margin-bottom:10px;"/>
      <a href="https://ahmat-mahamat.vercel.app/">ahmat-mahamat.vercel.app</a> 
      <br style="margin-bottom:10px;"/>
      ${process.env.MY_EMAIL} <br style="margin-bottom:10px;"/>
      ${userData.phoneNumber} <br style="margin-bottom:10px;"/>
    </p>
  `
});




