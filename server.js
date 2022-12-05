const mongoose = require('mongoose');
require('./crons/crons');
const app = require('./index')
mongoose.connect(process.env.MONGO_URl+process.env.DB_NAME,{family:4},(err)=>{
         if(err){
            console.log(err.message)
         }else{
            console.log('Database connected Successfully!')
            app.listen(process.env.PORT , ()=>{
                console.log(`Example app listening at port http://localhost:${process.env.PORT}`)
            })
         }
})
