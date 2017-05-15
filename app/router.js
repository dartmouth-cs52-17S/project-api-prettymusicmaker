import { Router } from 'express';
import * as Musics from './controllers/music_controller';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our pretty music maker api!' });
});

// /your routes will go here
router.route('/music/')
  .post(Musics.createMusic)
  .get(Musics.getMusics);

router.route('/music/:id')
.put(Musics.updateMusic)
.get(Musics.getMusic)
.delete(Musics.deleteMusic);

export default router;
