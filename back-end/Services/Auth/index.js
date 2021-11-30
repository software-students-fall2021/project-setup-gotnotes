const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const check_jwt = (token) => {
    try{
        return jwt.verify(token, JWT_SECRET)
    }
    catch(err){
        return false
    }

};

module.exports = check_jwt