import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostSchema = new Schema({
  title: String,
  tags: String,
  content: String,
  cover_url: String,
}, {
  toJSON: {
    virtuals: false,
  },
  {
    timestamps: true,
  },
});

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);


export default PostModel;
