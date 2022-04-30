const  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hello").then(function(){
  console.log("connected")
});
const userSchema = mongoose.Schema({
  firstname:String,
  lastname:String,
  birthdate:String,
  gender:String,
  email:String,
  phonenumber:Number

})
module.exports = mongoose.model("user",userSchema);
