const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const { getMaxListeners } = require('process');

const app = express();


  const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

//View engine setup
// app.engine('handlebars',exphbs());
// app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors);

app.get('/', (req, res) => {
  res.send('welcome to my form');
});

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',

  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  }

})
app.post('/api/forms', (req, res) => {
  let data = req.body;
  
let mailoptions = {
  from: data.email,
  to: process.env.EMAIL_USERNAME,
  subject: `message from ${data.name}`,
  html: `
  <h3>Informations</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.Email}</li>
      <li>Message: ${data.message}</li>
    </ul>
  <p>${data.message}</p>
  `
}

smtpTransport.sendMail(mailoptions, (error, response) => {
  if(error){
    res.send(error);
  }else{
    res.send('Success')
  }
})
smtpTransport.close();

})
// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

  // send mail with defined transport object
  // let info = await transporter.sendMail({
  //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
  //   to: "bar@example.com, baz@example.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // });

app.listen(3001, () => console.log('Server started...'));