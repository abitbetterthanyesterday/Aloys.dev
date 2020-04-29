const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static((path.join(__dirname, '../dist'))));

app.post('/', (req, res) => {
  // async..await is not allowed in global scope, must use a wrapper
async function sendMail(body) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  console.log('body: ',body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aloysberger@gmail.com', // generated ethereal user
      pass: 'Viriat12&' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: body.email, // sender address
    to: 'aloysberger@gmail.com', // list of receivers
    subject: `Aloys.dev=>${body.subject}`, // Subject line
    text: `
    Message from ${body.email} 

    Name: 
    ${body.name}

    Body:
    ${body.message}`, // plain text body
     // html: "<b>Hello world?</b>" // html body
  }); 
}
 
async function sendConfirmationMail(body){

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aloysberger@gmail.com', // generated ethereal user
      pass: 'Viriat12&' // generated ethereal password
    }
  });

    // send confimartion email
  let confirmation = await transporter.sendMail({
    from: 'aloysberger@gmail.com', // sender address
    to: body.email, // list of receivers
    subject: `Aloys.Dev => Confirmation email`, // Subject line
    text: `
    Hi!
    This is a message from Aloys! You have left me a message on my website, https://aloys.dev.
    Do not worry I did get your email, I will get back to you ASAP!

    As a reminder, this is what you have sent me:
    Subject 
    ${body.subject}

    Body:
    ${body.message}

    Regards,
    Aloys.`,
  });
}

  sendMail(req.body).catch(console.error).then(sendConfirmationMail(req.body)).catch(console.error);


  res.redirect('/#contact');
})

app.get('/messageSent', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/messageSent.html'));
})

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));


