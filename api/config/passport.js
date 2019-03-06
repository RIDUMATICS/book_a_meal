import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import database from '../database/models';

const { Users } = database;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

export default (passport) => {
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    Users.findById(jwtPayload.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      }).catch(err => console.log(err));
  }));
};
