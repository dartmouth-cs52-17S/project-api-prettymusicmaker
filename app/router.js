import { Router } from 'express';
import * as Musics from './controllers/music_controller';
import * as UserController from './controllers/user_controller';
import { requireAuth, requireSignin } from './services/passport';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our pretty music maker api!' });
});

// TODO REQUIRE AUTH NEEDS TO BE INTEGRATED

// create and get music
router.route('/music/')
  .post(requireAuth, Musics.createMusic)
  .get(requireAuth, Musics.getMusics);

router.route('/music/:id')
.put(requireAuth, Musics.updateMusic)
.get(Musics.getMusic)
.delete(requireAuth, Musics.deleteMusic);

// signin method
router.post('/signin', requireSignin, UserController.signin);

// signup method
router.post('/signup', UserController.signup);

export default router;
