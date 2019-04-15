const userModel= require('../models/user')
module.exports={
    async signup(req,res){
        console.log(req.file,req.body)
       const {name,email,password}= req.body
       const user= new userModel({
        name:name,
        email:email,
        password:password,
        image:'http'+':'+'//localhost:3000/'+req.file.filename
       })
       user.save(function(err,data)
       {try{

            if(err)
               console.log(err)
            res.send({
                status:200,
                data:data
            })
        } 
        catch(error){
            res.send(error.stack)

        } 
       })
    }
}