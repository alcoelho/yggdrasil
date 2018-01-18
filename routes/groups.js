var express = require('express');
var router = express.Router();
var gitlab = require('gitlab')({
  url:   'https://gitlab.globoi.com',
  token: process.env.gitlab_token
});
var request = require('request')

/* GET groups listing. */
const GITLAB_URL = "https://gitlab.globoi.com/api/v4"

router.get('/', function(req, res, next) {
  result = [] 
  gitlab.groups.all(function(groups) {
      for (var i = 0; i < groups.length; i++) {
        if (i == 0) console.log(groups[i])
          result[i] = groups[i]
          // console.log(result[i].id, result[i].name)
          // console.log("#" + groups[i].id + ": " + groups[i].name + ", path: " + groups[i].path + ", default_branch: " + groups[i].default_branch + ", private: " + groups[i]["private"] + ", owner: " + groups[i].owner.name + " (" + groups[i].owner.email + "), date: " + groups[i].created_at);
      }
      res.json(result)
  });
  // res.json([{"id": "teste", "name": "teste"}]);
});

router.get('/:id/projects', function(req, res, next) {
  result = []
  request.get(GITLAB_URL + "/groups/" + req.params.id + "/projects?private_token=" + process.env.gitlab_token, {}, function(error, response, body) {
    projects = JSON.parse(body)
    for (project in projects) {
      result.push(projects[project])
    }
    res.json(result)
  });
  // gitlab.groups.all(function(groups) {
  //     for (var i = 0; i < groups.length; i++) {
  //       if (i == 0) console.log(groups[i])
  //         result[i] = groups[i]
  //         // console.log(result[i].id, result[i].name)
  //         // console.log("#" + groups[i].id + ": " + groups[i].name + ", path: " + groups[i].path + ", default_branch: " + groups[i].default_branch + ", private: " + groups[i]["private"] + ", owner: " + groups[i].owner.name + " (" + groups[i].owner.email + "), date: " + groups[i].created_at);
  //     }
  //     res.json(result)
  // });
  // res.json([{"id": "teste", "name": "teste"}]);
});

module.exports = router;