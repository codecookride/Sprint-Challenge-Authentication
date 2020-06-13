  
const router = require("express").Router();

const Users = require("./user-model.js");
const restricted = require("../auth/authenticate-middleware.js");


router.get("/", restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;