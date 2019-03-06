import bcrypt from 'bcrypt';

const checkPassword = (plainPassword, hashedPassword) => {
  const isValid = bcrypt.compareSync(plainPassword, hashedPassword);
  return isValid;
};

export default checkPassword;
