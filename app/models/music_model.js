import mongoose, { Schema } from 'mongoose';

// create a musicSchema with a title field
const MusicSchema = new Schema(

  {
    title: String,
    author: String,
    music: [[], [], [], [], [], [], [], [], [], [], [], []],
    tempo: Number,
    sythn: Number,

  },
);

// create musicModel class from schema
const MusicModel = mongoose.model('Music', MusicSchema);

export default MusicModel;
