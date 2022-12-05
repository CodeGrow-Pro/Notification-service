const express = require('express')
const router = express.Router()
const notificationController = require('../../../controllers/notification.controller')
//-------------------------Notification Post Mathod----------------------------

router.post('/notification/send',notificationController.postNotification)

//--------------------------Notification Get Method-------------------------------------

router.get('/notification/:id',notificationController.getNotification);

module.exports = router;