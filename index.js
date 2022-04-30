var express = require('express');
var router = express.Router();
const db = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post("/form",function(req,res){
  db.create({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    birthdate:req.body.birthdate,
    gender:req.body.gender,
    email:req.body.email,
    phonenumber:req.body.phonenumber
  
  })
  .then(function(created){
    res.redirect("/index");
  })
})
router.get("/index",function(req,res){
  db.find()
    .then(function(data){
      res.render("index",{data});
    })
  });
  router.get("/delete/:id",function(req,res){
    db.findOneAndDelete({_id:req.params.id})
    .then(function(deleteduser){
      res.redirect("/index")
    })
  
  })
  
module.exports = router;
