 var router = require('express').Router()
 var passport = require('passport');
 var User = require('./model.js');
 router.post('/register', function(req, res) {
    console.log(req.body)
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(function(err) {
      if(err) return res.status(400).json(err);
      var token;
      token = user.generateJwt();
      res.status(200).json({
        "token" : token
      });
     
    });
    
  });

router.post('/login',function (req,res){
  console.log(req.body)
  passport.authenticate('local', function(err, user, info){
    var token;
    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token,
        "user":user
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
});
router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if(err) return res.status(400).json(err);
    res.json(users);
  });
});
router.get('/users/:id', function(req, res) {
  User.findOne({_id: req.params.id}, function(err, obj) {
    if(err) return res.status(400).json(err);
    res.json(obj);
  })
});
module.exports = router