const cron = require('node-cron');
const notification = require('../models/notification.model');
const EmailTransporter = require('../services/email.services')
const nodemailer = require('nodemailer')
exports.taskSheduler = cron.schedule('*/15 * * * * *',async ()=>{
    
    try{
        const findedData = await notification.find({
            status:'UN_SENT'
        });
        console.log(findedData.length)
        if(findedData){
            findedData.forEach(async  (send)=>{
                console.log(send)
                const testAccount = await nodemailer.createTestAccount();
                const transportor = EmailTransporter.transportor((testAccount));
                const mailData = {
                    from: testAccount.user, // sender address
                    to:send.recipients, // list of receivers
                    subject: send.subject, // Subject line
                    text: send.body, // plain text body
                    html: "<H1>Thanks for use notification service</h1>", // html body
                    };   
                     (await transportor).sendMail(mailData, async  (err, info)=> {
                        if (err){
                        console.log('from sendMail function error',err);
                        }else{
                            console.log(info)
                        const data = await notification.findOne({_id:send._id});
                        data.status = 'SENT';
                        await data.save();
                        }});   
            })
        }
    }catch(err){
               console.log(err.message);
               return;
    }
});