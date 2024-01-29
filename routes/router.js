const express = require('express');

const router = express.Router();

router.get('/', function(req,res){
    res.render('../views/index.ejs')
});

router.get('/blogEdit', function(req,res){
    res.render('../views/blogEdit.ejs')
});

// router.get('/blogViews', function(req,res) {
//     res.render('../views/blogViews.ejs')
// });

module.exports = router