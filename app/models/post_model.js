import mongoose, { Schema } from 'mongoose';

// mongoose.Promise = global.Promise;

// create a PostSchema with a title field
const PostSchema = new Schema(

  {
    title: String,
    cover_url: String,
    content: String,
    tags: [String],
  },
  {
    timestamps: true,
  },

);

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
