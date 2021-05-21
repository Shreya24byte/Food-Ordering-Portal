var express = require('express');
var router = express.Router();
const foodModel = require('../models/foodModel');

/* GET users listing. */
router.get("/getPizza", function(req,res){
    foodModel.find({food:'Pizza'},function(err,data){
        if(err){
            console.log("err", err);
            res.status(400).send({
                message: 'this is an error',
            })
        } else {
            res.send({results: data});
        }
    })
})
router.get("/getBurger", function(req,res){
    foodModel.find({food:'Burger'},function(err,data){
        if(err){
            console.log("err", err);
            res.status(400).send({
                message: 'this is an error',
            })
        } else {
            res.send({results: data});
        }
    })
})

module.exports = router;
