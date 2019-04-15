const controller= require('./controller')
const validator= require('../validation/validators')
var express = require('express')
const multer= require('multer')
var storage = multer.diskStorage({ destination: __dirname+'/public/upload',
    filename: function(req, file, cb) {
    cb(
      null,
      "img_"  +
        Date.now() +
        ".jpeg"
    );
  }})
const upload = multer({storage:storage})
module.exports = express.Router().
post('/signup',upload.single('avatar'),controller.signup);

// module.exports = router