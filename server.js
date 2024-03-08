
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });


const app = require("./app.js");


mongoose.connect(process.env.LOCAL_CONN_STR, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
}).then((conn)=>{
   console.log("DB connection succesfully")
}).catch((err)=>{
   console.log("some error has occured")
})


//CREATE A SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server has started at ' + port)
})



