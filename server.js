const express1 = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const multer = require('multer');
// const commonf = require('./commonFunction');
const routes = require('./routes/routes');

// const nodemailer = require('nodemailer');

const PORT = 80;
const app = express1();
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, function() {
  console.log('port running on ' + PORT);
});

// const PATH ='./uploads';

// async function main(){

//   let testAccount = await nodemailer.createTestAccount();

//   let transporter = nodemailer.createTransport({
//     // host: "smtp.ethereal.email",
//     // port: 587,
//     // secure: false, // true for 465, false for other ports
//     service:'gmail',
//     auth: {
//       user: "yogeshnk238@gmail.com", // generated ethereal user
//       pass: "nandakumar238" // generated ethereal password
//     }
//   });

//   let info = await transporter.sendMail({
//     from: 'yogeshnk238@gmail.com', // sender address
//     to: "yogi.yogesh.tamarapu@gmail.com", // list of receivers
//     subject: "Hello", // Subject line
//     text: "Hello world hi hi hi", // plain text body
//     // html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }
// main().catch(console.error);

// let storage = multer.diskStorage({
//   destination:(req,file,cfn) =>{
//     cfn(null,PATH);
//   },
//   filename:(req,file,cfn)=>{
//     cfn(null,file.originalname);
//   }
// })

// let upload = multer({
//   storage:storage
// })

// app.post('/api/uploads', upload.single('image'), function(req,res){
//   console.log(req.body);
  
//   if(!req.file){
//     console.log("no file is available");
//     res.send({success:false});
//   } else {
//     console.log("file is available");
//     res.send({success:true})
//   }
// })




app.use('/routes',routes);

module.exports = app;