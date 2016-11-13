var express = require('express');
var router = express.Router();
var juration = require('juration');

var request = require(__base + 'request');

router.post('/fetch', function(req, res, next) {
    request.get(req, res, '/questions?limit=' + req.body.num)
        .then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

router.post('/post', function(req, res, next) {

    request.post(req, res, '/questions', {
        title:req.body.title,
        category:req.body.category,
        hideUser: req.body.hideUser
    })
        .then(function (data){
            return res.json(data);
        })
        .catch(function (err) {
            next(err);
        });
});

router.post('/answer', function(req, res, next) {

    request.post(req,res,'/answers',{
        qid:req.body.ans.qid,
        title:req.body.ans.title,
        steps:req.body.ans.steps,
        hideUser: req.body.ans.hideUser
    })
        .then(function (data){
            return res.json(data);
        })
        .catch(function(err){
            console.log(err)
    });
});

router.post('/checkA', function(req, res, next) {
    request.get(req, res, '/answer/' + req.body.qid)
        .then(function (data){
            return res.json(data)
        })
});

router.post('/checkQ', function(req, res, next) {
    request.post(req, res, '/questions',{
        qid:req.body.qid
    })
        .then(function (data){
            return res.json(data);
        })
});

router.post('/querySearch',function(req,res,next){
    console.log(req.body);
    //request.get(req, res, '/questions?keywords='+req.body.keywords+'&category='+req.body.category+'&uid='+req.body.uid+'&limit='+req.body.limit+'after='+req.body.after)
    request.get(req, res, '/questions?limit=3')
        .then(function (data) {
            console.log(data);
            return res.json(data);
        })
        .catch(function(err){
            console.log(err)
        })

});
        // }
        // .then(function (data) {
        //     data.forEach(function (item) {
        //         item.category = [item.category];
        //     });
        //
        //     return Promise.all(data.map(function (item) {
        //         if (item.uid) {
        //             return request.get(req, res, '/users/' + item.uid).then(function (data) {
        //                 item.username = data.username;
        //                 return item;
        //             });
        //         }
        //         else {
        //             return item;
        //         }
        //     }));

module.exports = router;