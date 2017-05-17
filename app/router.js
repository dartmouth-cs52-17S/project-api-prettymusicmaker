import { Router } from 'express';
import * as Musics from './controllers/music_controller';
import * as UserController from './controllers/user_controller';
import { requireSignin } from './services/passport';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our pretty music maker api!' });
});

// TODO REQUIRE AUTH NEEDS TO BE INTEGRATED

// /your routes will go here
router.route('/music/')
  .post(Musics.createMusic)
  .get(Musics.getMusics);

router.route('/music/:id')
.put(Musics.updateMusic)
.get(Musics.getMusic)
.delete(Musics.deleteMusic);

// signin method
router.post('/signin', requireSignin, UserController.signin);

// signup method
router.post('/signup', UserController.signup);

export default router;
