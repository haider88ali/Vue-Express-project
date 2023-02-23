const express = require('express');
require('dotenv').config();
require("./db/conn");
const cors = require('cors');
const app = express();
const User = require("./models/User");
const port=process.env.PORT || 6000;
const Userrouter = require("./routers/users");

app.use(express.json());
app.use(Userrouter);
app.use(cors());


app.post('/users',async(req,res) => {
  try{
      const user = new User(req.body);
      const createUser= await user.save();
      res.status(200).send(createUser);

  }catch(err){
      res.status(400).send(err);
  }

});
app.listen(port,() => console.log(`running port ${port}`));




