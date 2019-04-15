const express= require('express');
const app = express();
const port = 3000
const router = require('./routes/router');
const mongoose=require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static(path.join(__dirname, '/public/upload')))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true},(err,data)=>{
    if(err)
    console.log(err)
    else
    console.log("Mongo DB connected")
});
router(app);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))