import Music from '../models/music_model';

// this cleans the musics because we use id instead of dangling _id
// and we purposefully don't return content here either
const cleanMusic = (music) => {
  // return { id: music._id, title: music.title, tiles: music.tiles, tags: music.tags.join(' ') };
  return { id: music._id, music: music.music };
};

const cleanMusics = (musics) => {
  return musics.map((music) => {
    // return { id: music._id, title: music.title, tiles: music.tiles, tags: music.tags.join(' ') };
    return { id: music._id, music: music.music };
  });
};

// from http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
function compare(a, b) {
  if (a.createdAt < b.createdAt) { return 1; }
  if (a.createdAt > b.createdAt) { return -1; }
  return 0;
}

export const createMusic = (req, res) => {
  // res.send('music should be created here');
  const music = new Music();
  // music.title = req.body.title;
  music.music = req.body.music;
  // music.tags = req.body.tags.split(' ');

  music.save()
    .then((result) => {
      res.json(
        { message: 'Music created!' },
      );
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getMusics = (req, res) => {
  // res.send('musics should be returned');
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
      // title: req.body.title,
      // cover_url: req.body.cover_url,
      tiles: req.body.tiles,
      // tags: req.body.tags.split(' '),
    })
    .then(() => {
      res.json(
        { message: 'Music updated!' },
      );
    });
};
