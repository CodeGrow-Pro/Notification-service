"use strict";
const nodemailer = require('nodemailer');
exports.transportor = async (testAccount)=>{
    let transportor = nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        secure:false,
        auth:{
            user : testAccount.user,
            pass : testAccount.pass
        },
    });
    return transportor;
}
