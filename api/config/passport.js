import { Strategy as JwtStrategy, ExtractJwt  } from 'passport-jwt';
import database from '../database/models';

const Caterer = database.Caterers;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

export default (passport) => {
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    Caterer.findById(jwtPayload.id)
      .then((caterer) => {
        if (caterer) {
          return done(null, caterer);
        }
        return done(null, false);
      }).catch(err => console.log(err));
  }));
};
