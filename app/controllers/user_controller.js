import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// authentication methods
export const signin = (req, res, next) => {
  console.log(tokenForUser(req.user));
  res.send({ token: tokenForUser(req.user), email: req.user.email });
};

export const signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  console.log(username);

  if (!email || !password) {
    console.log('password or email not provided');
    return res.status(422).send('You must provide email and password');
  }
  // create the user object if not in DB
  User.find({ email })
  .then((users) => {
    if (!(users.length === 0)) {
      return res.status(422).send('User already exists!');
    } else {
      // create new user
      const user = new User();
      user.email = email;
      user.password = password;
      user.username = username;

      // save the user in db
      user.save()
      .then((result) => {
        console.log('token sent');
        res.send({ token: tokenForUser(user), email: user.email });
      })
      .catch((er) => {
        console.log('error saving');
        res.status(500).json({ er });
      });
    }
    return 0;
  });
  return 0;
};

// helper function to create JWT token
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}
