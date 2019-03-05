import bcrypt from 'bcrypt';
import database from '../database/models';

const Caterer = database.Caterers;

class CatererService {
  static async addCaterer(catererInput) {
    return Caterer.count({
      where: {
        email: catererInput.email,
      }
    }).then((count) => {
      if (count) {
        throw new Error('Email already exits');
      } else {
        const {
          name,
          displayName,
          email,
          phoneNumber,
          state,
          city,
          country,
        } = catererInput;
        let {
          password,
        } = catererInput;
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt).then((hash) => {
            password = hash;
            Caterer.create({
              name,
              displayName,
              email,
              phoneNumber,
              state,
              city,
              country,
              password,
            });
          });
        });
        return {
          code: 200,
          status: 'Success',
          message: 'User created successfully',
          user: {
            name,
            displayName,
            email,
            phoneNumber,
            state,
            city,
            country,
          },
        };
      }
    }).catch(() => ({
      code: 400,
      status: 'Email already exits',
    }));
  }
}

export default CatererService;