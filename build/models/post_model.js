'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a PostSchema with a title field
var PostSchema = new _mongoose.Schema({
  title: String,
  tags: String,
  content: String,
  cover_url: String
}, {
  toJSON: {
    virtuals: false
  }
});

// create PostModel class from schema
var PostModel = _mongoose2.default.model('Post', PostSchema);

exports.default = PostModel;