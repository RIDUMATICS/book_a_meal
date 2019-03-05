import catererService from '../services/caterer.service';

const CatererController = {
  addCaterer(req, res) {
    catererService.addCaterer(req.body)
      .then(resp => res.status(resp.code).json(resp))
      .catch(err => res.send(err));
  },

};

export default CatererController;
