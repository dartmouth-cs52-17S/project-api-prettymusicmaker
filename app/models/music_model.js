import mongoose, { Schema } from 'mongoose';

// mongoose.Promise = global.Promise;

// create a PostSchema with a title field
const MusicSchema = new Schema(

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
const MusicModel = mongoose.model('Music', MusicSchema);

export default MusicModel;
