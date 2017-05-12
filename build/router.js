'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _post_controller = require('./controllers/post_controller');

var Posts = _interopRequireWildcard(_post_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.get('/', function (req, res) {
  res.json({ message: 'welcome to our blog api!' });
});

// /your routes will go here
// example!
// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts').post(Posts.createPost).get(Posts.getPosts);

router.route('/posts/:id').get(Posts.getPost).put(Posts.updatePost).delete(Posts.deletePost);

exports.default = router;