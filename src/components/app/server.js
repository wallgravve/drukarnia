const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express();
import config from './config'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/form', (req, res) => {
nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <ul>
    <li>Name: ${req.body.data.Name}</li>
    <li>Name: ${req.body.data.MobileNumber}</li>
    <li>Name: ${req.body.data.Email}</li>
    <li>Name: ${req.body.data.City}</li>
    <li>Name: ${req.body.data.Message}</li>
    </ul>
    `
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          ...config
        }
      });
      
    // user: 'obrazycanvas@fotodream.pl',
    // pass: 'Falamala123'
    // send mail with defined transport object
    let mailOptions = {
        from: req.body.data.Email, // sender address
        to: 'pawlaczyk.lukasz@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: req.body.data.About, // plain text body
        html: htmlEmail// html body
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            return console.log(err)
        }
    })

})

    console.log(req.body)

    })

const PORT = process.env.PORT || 3000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})