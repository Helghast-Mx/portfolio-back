const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: process.env.mail, // Cambialo por tu email
 pass: process.env.PASS // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `${formulario.name} <${formulario.email}>`,
 to: `solis.joseph.a@gmail.com`, // Cambia esta parte por el destinatario
 subject: formulario.subject,
 html: `
 <strong>Nombre:</strong> ${formulario.name} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.message}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}