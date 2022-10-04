// student authentication middleware
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const isStudentLogedIn = (req, res, next)=>{
    //Get the user from the jwt token and id to req object
    const token = req.header("student-auth-token");
    if(!token){
        res.status(401).send({error:"Somthing went wrong please login again"});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Somthing went wrong please login again"});
    }
    
}

module.exports = isStudentLogedIn;