const userModel=require('../models/user')
module.exports={
     email_check(req,res,next) {
        userModel.findOne({email:req.body.email},function(err,data){
           try{
            if(data)
            throw next(new Error("Email already exists"));
            else 
            next();
           }
           catch(error){
               res.send({message:"email already exits",status:0})
           }
        })
    
    }
}