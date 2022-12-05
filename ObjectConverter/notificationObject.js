exports.singleObject = (notification)=>{
    const send = {
        subject:notification.subject,
        body:notification.body,
        requestor:notification.requestor,
        ticketId:notification.ticketId,
        recipients:notification.recipients,
        Status:notification.status
    }
    return send;
}