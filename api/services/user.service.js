import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import database from '../database/models';
import checkPassword from '../utils/checkPassword';

const User = database.Users;

class UserService {
  static async addUser(UserInput) {
    return User.count({
      where: {
        email: UserInput.email,
      },
    }).then((count) => {
      if (count) {
        throw new Error('Email already exits');
      } else {
        const {
          firstName,
          lastName,
          email,
          address,
          phoneNumber,
          role,
        } = UserInput;
        let {
          password,
        } = UserInput;
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt).then((hash) => {
            password = hash;
            User.create({
              firstName,
              lastName,
              email,
              address,
              phoneNumber,
              role,
              password,
            });
          });
        });
        return {
          code: 200,
          status: 'Success',
          message: 'User created successfully',
          user: {
            firstName,
            lastName,
            email,
            address,
            phoneNumber,
            role,
          },
        };
      }
    }).catch(() => ({
      code: 400,
      status: 'Email already exits',
    }));
  }

  static async loginUser(UserInput) {
    try {
      const user = await User.findOne({
        where: {
          email: UserInput.email,
        },
      });
      if (!user) {
        throw new Error('Email does not exits');
      } else if (!checkPassword(UserInput.password, user.password)) {
        throw new Error('invalid password');
      } else {
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          phoneNumber: user.phoneNumber,
          role: user.role,
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
      return { code: 400, message: error.message };
    }
  }
}

export default UserService;
