'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePost = exports.deletePost = exports.getPost = exports.getPosts = exports.createPost = undefined;

var _post_model = require('../models/post_model');

var _post_model2 = _interopRequireDefault(_post_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cleanPosts = function cleanPosts(posts) {
  return posts.map(function (post) {
    return { id: post._id, title: post.title, tags: post.tags, cover_url: post.cover_url };
  });
};

var createPost = exports.createPost = function createPost(req, res) {
  // res.send('post should be created here');
  var post = new _post_model2.default();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.cover_url = req.body.cover_url;
  post.save().then(function (result) {
    res.json({ message: 'Post created!' });
  }).catch(function (error) {
    res.status(500).json({ error: error });
  });
};

var getPosts = exports.getPosts = function getPosts(req, res) {
  // res.send('posts should be returned\n');
  _post_model2.default.find({})
  // .sort('created_at')
  .then(function (returnedPosts) {
    console.log(returnedPosts);
    res.json(cleanPosts(returnedPosts));
  }).catch(function (err) {
    res.json({ err: err });
  });
};

var getPost = exports.getPost = function getPost(req, res) {
  // res.send('single post looked up\n');
  _post_model2.default.findById(req.params.id).then(function (returnedPost) {
    res.json({ id: returnedPost._id, title: returnedPost.title, tags: returnedPost.tags, content: returnedPost.content, cover_url: returnedPost.cover_url });
  }).catch(function (err) {
    res.json({ err: err });
  });
};

var deletePost = exports.deletePost = function deletePost(req, res) {
  _post_model2.default.findOneAndRemove({ _id: req.params.id }).then(function () {
    res.json('Post Deleted Successfully');
  }).catch(function (err) {
    res.json({ err: err });
  });
};

var updatePost = exports.updatePost = function updatePost(req, res) {
  _post_model2.default.findOneAndUpdate({ _id: req.params.id }, { title: req.body.title, tags: req.body.tags, content: req.body.content, cover_url: req.body.cover_url }).then(function () {
    res.json('Post Updated Succesfully');
  }).catch(function (err) {
    res.json({ err: err });
  });
};