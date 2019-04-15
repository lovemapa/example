var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:  {type:String},
  email: {type:String},
  password:String,
  image:{type:String}
},
 {
  timestamps: true 
 } 
 
);
module.exports = mongoose.model('User', UserSchema );