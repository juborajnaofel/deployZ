const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');


const app = express();
const port = 3000; // You can use any available port
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('JN Courier api backend!');
});


app.post("/api/login", async (req, res, next) => {
  
  let { email, password } = req.body;

  let existingUser = {id: 1, email: "juborajnaofel@mern-attendence-system.test", password:'password'};
  if (!existingUser || existingUser.password != password) {
    const error = Error("Wrong details please check at once");
    return next(error);
  }

  let token = jwt.sign(
    { userId: existingUser.id, email: existingUser.email },
    "hello-world-secret",
    { expiresIn: "1h" }
  );

 
  res.status(200)
    .json({
      success: true,
      data: {
        userId: existingUser.id,
        email: existingUser.email,
        token: token,
      },
    });
});



app.get('/api/access', (req, res)=>{   
  const token = req.headers.authorization.split(' ')[1];  
  //'Bearer TOKEN'
  if(!token){
      res.status(200).json({success:false, message: "Error!Token was not provided."});
  }
  const decodedToken = jwt.verify(token,"hello-world-secret" );
  res.status(200).json({success:true, data:{userId:decodedToken.userId, email:decodedToken.email}});    
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
