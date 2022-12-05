const notification = require('../models/notification.model');
const converter = require('../ObjectConverter/notificationObject')
 exports.postNotification = async (req,res)=>{
    console.log({
        subject:req.body.subject,
        body:req.body.body,
        requestor:req.body.requestor,
        ticketId:req.body.ticketId,
        recipients:req.body.recipients
    })
    const sendObj  = {
        subject:req.body.subject,
        body:req.body.body,
        requestor:req.body.requestor,
        ticketId:req.body.ticketId,
        recipients:req.body.recipients
    }
    try{
               const posted = await notification.create(sendObj)
               return res.status(201).send({
                requestId:posted.ticketId,
                message:"send Notification successfully!",
                success:true
               })
    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            message:"Something want wrong!",
            success:false
        })
    }
 }

 exports.getNotification = async (req,res)=>{
    const ticketId = req.params.id;
    if(!ticketId){
        return res.status(404).send({
            message:"Request ID Not found!",
            success:false
        });
    }
    try{
         const finded  = await notification.findOne({ ticketId : ticketId })
         return res.status(201).send({
            message:"find notification successfully!",
            success:true,
            Notification:converter.singleObject(finded)
         })
    }catch(err){
        return res.status(500).send({
            message:"Something want wrong!",
            success:false
         })
    }
 }