import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import database from '../database/models';
import checkPassword from '../utils/checkPassword';

const Caterer = database.Caterers;

class CatererService {
  static async addCaterer(catererInput) {
    return Caterer.count({
      where: {
        email: catererInput.email,
      },
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

  static async loginCaterer(catererInput) {
    try {
      const caterer = await Caterer.findOne({
        where: {
          email: catererInput.email,
        },
      });
      if (!caterer) {
        throw new Error('Email does not exits');
      } else if (!checkPassword(catererInput.password, caterer.password)) {
        throw new Error('invalid password');
      } else {
        const payload = {
          id: caterer.id,
          name: caterer.name,
          displayName: caterer.displayName,
        };
        const token = jwt.sign(payload, 'secret', {
          expiresIn: 3600,
        });
        const resp = {
          code: 200,
          message: 'User loggedin successfully',
          user: payload,
          token: `Bearer ${token}`,
        };
        return resp;
      }
    } catch (error) {
      return {code:400, message: error.message };
    }
  }
}

export default CatererService;
