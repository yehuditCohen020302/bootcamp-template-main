const accountService=require('../services/account.service')


module.exports.login=async function(req, res, next) {
    // Account controller: POST /account/login
    try{
        const email=req.body.email;
        const password=req.body.password;
        const manager=await accountService.login(email,password);
        await res.send(manager);
    }
    catch (error){
        next(error);
    }


}

