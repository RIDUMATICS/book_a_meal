import userService from '../services/user.service';

const CatererController = {
  addUser(req, res) {
    userService.addUser(req.body)
      .then(resp => res.status(resp.code).json(resp))
      .catch(err => res.send(err));
  },
  loginUser(req, res) {
    userService.loginUser(req.body)
      .then(resp => res.status(resp.code).json(resp))
      .catch(err => res.send(err));
  },

};

export default CatererController;
