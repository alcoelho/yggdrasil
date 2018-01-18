var express = require('express');
var router = express.Router();
var gitlab = require('gitlab')({
    url:   'https://gitlab.globoi.com',
    token: process.env.gitlab_token
});

router.get('/', function(req, res, next) {
    result = [] 
    gitlab.projects.all(function(projects) {
        for (var i = 0; i < projects.length; i++) {
            result[i] = projects[i]
            console.log(result[i].id, result[i].name)
            // console.log("#" + projects[i].id + ": " + projects[i].name + ", path: " + projects[i].path + ", default_branch: " + projects[i].default_branch + ", private: " + projects[i]["private"] + ", owner: " + projects[i].owner.name + " (" + projects[i].owner.email + "), date: " + projects[i].created_at);
        }
        res.json(result)
    });
    // res.json([{"id": "teste", "name": "teste"}]);
});

// router.get('/', function(req, res, next) {
// 	// Comment out this line:
//   //res.send('respond with a resource');

//   // And insert something like this instead:
//   res.json([{
//   	id: 1,
//   	username: "samsepi0l"
//   }, {
//   	id: 2,
//   	username: "D0loresH4ze"
//   }]);
// });

module.exports = router