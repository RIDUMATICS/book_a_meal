import bcrypt from 'bcryptjs';

export default (password) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash('rilwayne', salt, (error, hash) => {
      if (error) throw error;
      console.log(hash);
    });
  });
};
