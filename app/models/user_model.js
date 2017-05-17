import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// create a User model
const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  username: String,
});

// set to Json
UserSchema.set('toJSON', {
  virtuals: true,
});

// save function
UserSchema.pre('save', function beforeyYourModelSave(next) {
  // this is a reference to our model
  const model = this;
  // only save hash if we are creating or updating the password
  if (!model.isModified('password')) {
    return next();
  }

  // generate the salt and hash
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(model.password, salt);

  // set the password
  model.password = hash;
  return next();
});

// compare the password
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, isMatch);
    }
  });
};

// create User class from schema
const User = mongoose.model('User', UserSchema);

export default User;
