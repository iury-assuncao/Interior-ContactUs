
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
require('dotenv/config');

//parte do bodyparser
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'))

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SENHA
  }
})

app.post('/email', (req, res) => {

const email = req.body.email
const name = req.body.name
const message = req.body.text

  let mailOptions = {
    from:`${name} `,
    to: 'iuryreivax@hotmail.com',
    replyTo: `${email}`,
    subject:'Contact interior',
    html:
    ` <h4>Mensagem de ${name}</h4><br>
      <p>${message}</p><br>
      <p>Email para contato: ${email}</p>
    `
  }
 

  transporter.sendMail (mailOptions, function(error,info){
    if(error){
      console.log(error)
    }

    else{
      console.log('Email sent '+ info.response)
    }

  })

  
  res.redirect('/');
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
