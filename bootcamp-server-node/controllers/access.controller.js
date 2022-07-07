const accessService=require('../services/access.service')


module.exports.loginManager=async function(req, res, next) {
    // Account controller: POST /account/login
    try{
        debugger
        const emailUser=req.body;
        // const password=req.params;
        const login_user=await accessService.login(emailUser);

        await res.send(login_user);
    }
    catch (error){
        next(error);
    }


}

