import { Strategy as JwtStrategy, ExtractJwt  } from 'passport-jwt';
import database from '../database/models';

const Caterer = database.Caterers;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

export default (passport) => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
  }));
};
