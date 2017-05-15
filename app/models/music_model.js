import mongoose, { Schema } from 'mongoose';

// mongoose.Promise = global.Promise;

// create a musicSchema with a title field
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

// create musicModel class from schema
const MusicModel = mongoose.model('Music', MusicSchema);

export default MusicModel;
