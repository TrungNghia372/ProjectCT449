const jwt = require('jsonwebtoken');

const middlewareHandle = {

    // verifyToken
    verifyToken: (req,res,next) => {
        const token = req.cookies.access_token;
        if (token) {
            // const accessToken = token.split(" ")[1];
            
            jwt.verify(token,process.env.JWT_ACCESS_KEY,(error,user) => {
                if (error){
                    res.status(403).json("Token is not valid");     
                }
                req.user = user;
                next();
            });
        }
        else {
            res.status(401).json("You're not authenticated");
        }
    },

    // verifyTokenAndAdmin
    verifyTokenAndAdmin: (req,res,next) => {
        middlewareHandle.verifyToken(req,res,() => {
            if(req.user.id == req.params.id || req.user.admin){
                next();
            }
            else {
                res.status(403).json("You're not Admin so can't delete other");     
            }
        });
    },
}
module.exports = middlewareHandle;