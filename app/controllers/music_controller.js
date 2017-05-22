import Music from '../models/music_model';

// this cleans the musics because we use id instead of dangling _id
// and we purposefully don't return content here either
const cleanMusic = (music) => {
  return { id: music._id, music: music.music, title: music.title, author: music.author, tempo: music.tempo };
};

const cleanMusics = (musics) => {
  return musics.map((music) => {
    return { id: music._id, music: music.music, title: music.title, author: music.author, tempo: music.tempo };
  });
};

// from http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
function compare(a, b) {
  if (a.createdAt < b.createdAt) { return 1; }
  if (a.createdAt > b.createdAt) { return -1; }
  return 0;
}

// save a music object to the db
export const createMusic = (req, res) => {
  const music = new Music();

  music.title = req.body.title;
  music.author = req.body.author;
  music.music = req.body.music;
  music.tempo = req.body.tempo;

  music.save()
    .then((result) => {
      console.log('success');
      res.json(
        { message: 'Music created!' },
      );
    })
    .catch((error) => {
      console.log('failure');
      res.status(500).json({ error });
    });
};

// return all the music
// TODO filter the music
export const getMusics = (req, res) => {
  Music.find()
    .then((musics) => {
      musics.sort(compare);

      res.json(cleanMusics(musics));
    });
};

export const getMusic = (req, res) => {
  // res.send('single music looked up');
  Music.findById(req.params.id)
    .then((music) => {
      res.json(cleanMusic(music));
    });
};

export const deleteMusic = (req, res) => {
  // res.send('delete a music here');
  Music.remove({ _id: req.params.id })
    .then(() => {
      res.json(
        { message: 'Music deleted!' },
      );
    });
};

export const updateMusic = (req, res) => {
  // res.send('update a music here');
  Music.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      author: req.body.author,
      tempo: req.body.tempo,
      music: req.body.music,

      // tags: req.body.tags.split(' '),
    })
    .then(() => {
      res.json(
        { message: 'Music updated!' },
      );
    });
};
