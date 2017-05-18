import mongoose, { Schema } from 'mongoose';

// mongoose.Promise = global.Promise;

// create a columnSchema
// const ColumnSchema = new Schema(
//   {
//     0: [Boolean],
//     1: [Boolean],
//     2: [Boolean],
//     // 3: [Boolean],
//     // 4: [Boolean],
//     // 5: [Boolean],
//     // 6: [Boolean],
//     // 7: [Boolean],
//   },
// );

// create a musicSchema with a title field
const MusicSchema = new Schema(

  {
    title: String,
    author: String,
    music: [Boolean],
    tempo: Number,
    // tags: [String],
  },
  {
    timestamps: true,
  },

);

// create musicModel class from schema
const MusicModel = mongoose.model('Music', MusicSchema);

export default MusicModel;
