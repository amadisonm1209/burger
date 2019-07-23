//import express, router and burger model
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//create routes and logic
router.get("/", function (req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res){
    burger.create([
        "burger-name", "devoured"
    ],[req.body.name, req.body.devoured
    ], function(result){
        //send back id of new burger
        res.json({id: result.insertId});
    }
    )
})

//export router
module.exports = router;