const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];  
  //'Bearer TOKEN'
  if(!token){
      res.status(200).json({success:false, message: "Error!Token was not provided."});
  }
  const decodedToken = jwt.verify(token,"hello-world-secret" );
  if(decodedToken){
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;