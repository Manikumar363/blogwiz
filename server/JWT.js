const {sign,verify} = require('jsonwebtoken')

const secret = "83962cd73916f906889afba90d8f047b02741e44ba22573a63d35731da7c3d8c8a1b37e6f81fd0705c2a4932cd1892efad211f2865b7f81350d75ca693f83554";

const createtoken = (_id,username)=>{
    const accesstoken = sign({
        username : username,
        id : _id
    },secret)

    return accesstoken ;
} 

// hdsufhdoufhewu8f8ewfjewuf9

const authenticateToken = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json("missing token")
    }

    verify(token, secret, (err,user)=>{
        if(err){
            return res.status(403).json("Invalid token") ;
        }

        req.user = user ;
        next() ;
    })
}


module.exports = {createtoken,authenticateToken} ;