import mongoose, { Schema } from 'mongoose';

// create a musicSchema with a title field
const MusicSchema = new Schema(

  {
    title: String,
    author: String,
    music: [[], [], [], [], [], [], [], [], [], [], [], []],
    bass: [],
    snare: [],
    hh: [],
    // tempo: Number,
    // synth: Number,

  },
);

// create musicModel class from schema
const MusicModel = mongoose.model('Music', MusicSchema);

export default MusicModel;
