const user= require('../user/route')
module.exports= function router(app){
app.use('/api/user',user)
}
